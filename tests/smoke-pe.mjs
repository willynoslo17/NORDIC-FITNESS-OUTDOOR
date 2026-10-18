#!/usr/bin/env node
/**
 * Smoke checks for Fortenergi /pe/ (Peru) and safety invariants.
 * Run: node tests/smoke-pe.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = [];
const ok = [];

function read(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) {
    fail.push("missing file: " + rel);
    return "";
  }
  return readFileSync(p, "utf8");
}

function assert(cond, msg) {
  if (cond) ok.push(msg);
  else fail.push(msg);
}

const pe = read("pe/index.html");
const region = read("region-switch.js");
const bridge = read("supplier-bridge.js");
const runtime = read("commerce-runtime.js");
const checkout = read("functions/api/create-checkout-session.ts");
const index = read("index.html");
const loader = read("pe/load-snapshot.js");
const snap = read("catalog/pe-fitness-outdoor.json");
const winners = read("functions/_shared/catalog-data/cj-winners.json");

assert(pe.includes('lang="es-PE"'), "pe/index.html is Spanish (es-PE)");
assert(/IGV|igv/.test(pe) && pe.includes("18"), "pe page mentions IGV 18%");
assert(pe.includes("PEN") || pe.includes("currency:'PEN'"), "pe page uses PEN");
assert(pe.includes('id="regionSwitch"'), "pe header has region switch");
assert(pe.includes("/region-switch.js"), "pe loads region-switch.js");
assert(pe.includes("/pe/load-snapshot.js"), "pe loads snapshot loader");
assert(!pe.includes("loadNordicCatalog"), "pe does not call loadNordicCatalog (no live APIs)");
assert(!pe.includes("/api/cj-products"), "pe does not call live CJ products API");
assert(!/CHECKOUT_ENABLED\s*=\s*true/.test(pe), "pe page does not enable checkout locally");
assert(pe.includes('disabled') && pe.includes("CAJA PRONTO"), "pe checkout button disabled");

assert(region.includes("fortenergi-region"), "region-switch uses localStorage key fortenergi-region");
assert(region.includes("/pe/"), "region-switch knows /pe/ path");
assert(region.includes("europa") && region.includes("peru"), "region-switch has Europa/Perú");

assert(bridge.includes("/catalog/selected-products.json"), "supplier-bridge uses absolute catalog paths");
assert(/const CHECKOUT_ENABLED = false/.test(runtime), "commerce-runtime CHECKOUT_ENABLED=false");
assert(/const CHECKOUT_ENABLED = false/.test(checkout), "create-checkout-session CHECKOUT_ENABLED=false");

assert(index.includes('id="regionSwitch"') || index.includes("region-switch.js"), "Norwegian index wires region switch");
assert(index.includes('lang="nb"'), "Norwegian store html lang unchanged");
assert(/Bygget for bevegelse/.test(index), "Norwegian hero copy unchanged");
assert(!index.includes("lima.css"), "Norwegian store does not load lima.css");

const legalPages = [
  ["pe/terminos.html", "Términos", "IGV"],
  ["pe/privacidad.html", "MARTINEZ LOZANO INTERNASJONAL HANDEL", "responsable"],
  ["pe/envios.html", "Envío a todo el Perú", "S/ 14"],
  ["pe/cambios.html", "devoluciones", "support@fortenergi.no"],
  ["pe/libro-reclamaciones.html", "Libro de Reclamaciones", "mailto:support@fortenergi.no"],
];
for (const [file, a, b] of legalPages) {
  const text = read(file);
  assert(text.includes(a) && text.includes(b), file + " has required legal content");
  assert(text.includes("regionSwitch") || text.includes("region-switch.js"), file + " has region switch");
}
assert(existsSync(join(root, "pe/legal.css")), "pe/legal.css exists");
assert(pe.includes("/pe/libro-reclamaciones"), "pe homepage links Libro de Reclamaciones");

const lima = read("pe/lima.css");
assert(lima.includes("--sun") && lima.includes("Archivo Black"), "lima.css defines Lima palette/fonts");
assert(pe.includes("/pe/lima.css"), "pe storefront loads lima.css");
assert(pe.includes("Yape") && pe.includes("Plin") && /pr[oó]ximamente/i.test(pe), "pe shows Yape/Plin próximamente");
assert(pe.includes("badge stock") && pe.includes("Envío a todo el Perú"), "pe products show stock and Peru shipping badges");
assert(pe.includes("reseñas") || pe.includes("reviews"), "pe products show reviews");

assert(loader.includes("pe-fitness-outdoor.json"), "snapshot loader points at PE catalog");
assert(!loader.includes("/api/"), "snapshot loader has no API calls");

let snapJson;
let winnersJson;
try {
  snapJson = JSON.parse(snap);
  assert(Array.isArray(snapJson) && snapJson.length >= 50, "pe snapshot has vetted products");
  const cats = new Set(snapJson.map((r) => String(r.category || r.cat || "").toLowerCase()));
  assert([...cats].every((c) => c === "fitness" || c === "outdoor"), "snapshot categories are only Fitness/Outdoor");
  assert(snapJson.every((r) => Number(r.priceNok) > 0 && r.image && r.name), "snapshot rows have price, image, name");
  assert(!JSON.stringify(snapJson).includes("sk_live"), "snapshot has no secrets");
} catch (e) {
  fail.push("pe-fitness-outdoor.json parse: " + e.message);
}

try {
  winnersJson = JSON.parse(winners);
  assert(winnersJson.onlyWinners === true, "cj-winners.json onlyWinners remains true");
  assert(Array.isArray(winnersJson.products) && winnersJson.products.length >= 100, "cj-winners keeps fitness/outdoor snapshot");
} catch (e) {
  fail.push("cj-winners.json parse: " + e.message);
}

console.log("PASS " + ok.length);
ok.forEach((m) => console.log("  ✓ " + m));
if (fail.length) {
  console.log("FAIL " + fail.length);
  fail.forEach((m) => console.log("  ✗ " + m));
  process.exit(1);
}
console.log("All smoke checks passed.");
