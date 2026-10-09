/* Fortenergi /pe/: load vetted fitness+outdoor snapshot only. No live CJ/Printify/Gelato/Printful calls. */
(function () {
  "use strict";
  const NOK_PER_EUR = 11.7;
  const SNAPSHOT_URL = "/catalog/pe-fitness-outdoor.json";

  function numericId(rawId, index) {
    const s = String(rawId || "");
    if (/^\d+$/.test(s)) {
      const n = Number(s);
      return Number.isSafeInteger(n) ? n : Number(s.slice(-15));
    }
    return 10001 + index;
  }

  function mapRow(item, index) {
    const nok = Number(item && item.priceNok);
    if (!(nok > 0)) return null;
    const cat = item.category || item.cat || "Fitness";
    const rawId = item.id != null ? String(item.id) : "";
    return {
      id: numericId(rawId, index),
      externalId: rawId,
      cjPid: rawId,
      name: item.name || "Producto",
      cat: cat,
      base: nok / NOK_PER_EUR,
      priceNok: nok,
      v: "v" + ((index % 4) + 1),
      tag: cat,
      brand: item.brand || "Fortenergi",
      image: item.image || "",
      sku: item.sku || "",
      supplier: item.supplier || "CJ Dropshipping",
      provider: "cj",
      badgeColor: "#0f766e"
    };
  }

  async function load() {
    const res = await fetch(SNAPSHOT_URL, { credentials: "same-origin" });
    if (!res.ok) throw new Error("snapshot " + res.status);
    const rows = await res.json();
    const list = (Array.isArray(rows) ? rows : [])
      .map(mapRow)
      .filter(Boolean)
      .filter((p) => /^(fitness|outdoor)$/i.test(String(p.cat || "")));
    window.nordicCatalogs = { cj: list, printify: [], gelato: [], printful: [] };
    /* Assign into the page's lexical `products` (let/var), not only window.products. */
    try {
      if (typeof products !== "undefined") {
        products = list;
      } else {
        window.products = list;
      }
    } catch (_) {
      window.products = list;
    }
    window.nordicCatalogReady = true;
    window.nordicCatalogComplete = true;
    document.documentElement.setAttribute("data-catalog-status", "offline: pe-snapshot · " + list.length);
    if (typeof renderFilters === "function") renderFilters();
    if (typeof renderProducts === "function") renderProducts();
    if (typeof renderCart === "function") renderCart();
    try { window.dispatchEvent(new Event("nordic:catalog-ready")); } catch (_) {}
    try { window.dispatchEvent(new Event("nordic:catalog-updated")); } catch (_) {}
    try { window.dispatchEvent(new Event("nordic:catalog-complete")); } catch (_) {}
    return list;
  }

  window.loadFortenergiPeSnapshot = load;
  load().catch(function (err) {
    document.documentElement.setAttribute("data-catalog-status", "offline: pe-snapshot-error");
    console.warn("PE snapshot load failed", err);
  });
})();
