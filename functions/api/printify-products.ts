const BASE = "https://api.printify.com/v1";

// Per-store curated catalog — PRIMARY source for storefront (never replace with shared shop dump)
const SELECTED: any[] = [
  {
    "id": "printify-fitness-1",
    "sku": "PFY-FIT-HOODIE-OUTDOOR",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Outdoor Club Zip Hoodie",
    "category": "Apparel",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 49.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-2",
    "sku": "PFY-FIT-HOODIE-TRAIL",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Trail Ready Zip Hoodie",
    "category": "Apparel",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 52.9,
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-3",
    "sku": "PFY-FIT-HOODIE-PR",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "PR Mode Zip Hoodie",
    "category": "Training",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 51.5,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-4",
    "sku": "PFY-FIT-TEE-TRAIL",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Trail Ready Unisex Tee",
    "category": "Apparel",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 29.9,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-5",
    "sku": "PFY-FIT-TEE-LEGS",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Never Skip Leg Day Tee",
    "category": "Training",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 28.5,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-6",
    "sku": "PFY-FIT-TEE-FJELL",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Fjell Runner Soft Tee",
    "category": "Outdoor",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 27.9,
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-7",
    "sku": "PFY-FIT-CREW-SUNRISE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Sunrise Session Crewneck",
    "category": "Apparel",
    "supplierPriceUsd": 16.5,
    "suggestedRetailUsd": 44.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "crewneck",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-8",
    "sku": "PFY-FIT-CREW-MILES",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Miles Crewneck",
    "category": "Outdoor",
    "supplierPriceUsd": 16.5,
    "suggestedRetailUsd": 46.9,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "crewneck",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-9",
    "sku": "PFY-FIT-TEE-PLUNGE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Cold Plunge Club Tee",
    "category": "Training",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 26.9,
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-10",
    "sku": "PFY-FIT-HOODIE-SUMMIT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Summit Seekers Zip Hoodie",
    "category": "Outdoor",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 54.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-11",
    "sku": "PFY-FIT-CREW-RECOVERY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Recovery Day Crewneck",
    "category": "Training",
    "supplierPriceUsd": 16.5,
    "suggestedRetailUsd": 43.9,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "crewneck",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-12",
    "sku": "PFY-FIT-TEE-HYDRATE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Hydrate & Elevate Tee",
    "category": "Apparel",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 25.9,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-13",
    "sku": "PFY-FIT-HOODIE-BASE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Base Camp Zip Hoodie",
    "category": "Outdoor",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 53.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-14",
    "sku": "PFY-FIT-TEE-TEMPO",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Tempo Run Soft Tee",
    "category": "Apparel",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 27.5,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "fitness"
  },
  {
    "id": "printify-fitness-15",
    "sku": "PFY-FIT-CREW-FJORD",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Fjord Miles Crewneck",
    "category": "Outdoor",
    "supplierPriceUsd": 16.5,
    "suggestedRetailUsd": 45.9,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "crewneck",
    "sector": "fitness"
  }
];

const SECTOR_ALIASES: Record<string, string> = {
  "beauty": "beauty",
  "perfume": "beauty",
  "perfumes": "beauty",
  "skincare": "beauty",
  "toys": "toys",
  "kids": "toys",
  "kid": "toys",
  "children": "toys",
  "electronics": "electronics",
  "tech": "electronics",
  "technology": "electronics",
  "pet supplies": "pet supplies",
  "pets": "pet supplies",
  "pet": "pet supplies",
  "home living": "home living",
  "home": "home living",
  "living": "home living",
  "fitness": "fitness",
  "outdoor": "fitness",
  "sports": "fitness",
  "solar energy": "solar energy",
  "energy": "solar energy",
  "solar": "solar energy",
  "car accessories": "car accessories",
  "car": "car accessories",
  "auto": "car accessories",
  "automotive": "car accessories"
};

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? Math.round(amount * 100) / 100 : 0;
}

function resolveSector(raw: string) {
  const key = String(raw || "").toLowerCase().trim();
  if (!key) return SELECTED[0]?.sector || "beauty";
  if (SECTOR_ALIASES[key]) return SECTOR_ALIASES[key];
  for (const [alias, sector] of Object.entries(SECTOR_ALIASES)) {
    if (key.includes(alias) || alias.includes(key)) return sector;
  }
  return key;
}

function curated(sector: string) {
  return SELECTED
    .filter((p) => !p.sector || String(p.sector).toLowerCase() === sector)
    .map((p, i) => ({
      id: String(p.id || `printify-selected-${i}`),
      sku: String(p.sku || ""),
      supplier: "Printify",
      provider: "printify",
      printifyProductId: String(p.printifyProductId || ""),
      printifyVariantId: String(p.printifyVariantId || ""),
      name: String(p.name || "Printify product"),
      category: String(p.category || sector),
      supplierPriceUsd: money(p.supplierPriceUsd) || money(p.suggestedRetailUsd),
      suggestedRetailUsd: money(p.suggestedRetailUsd) || money(p.supplierPriceUsd),
      image: String(p.image || ""),
      matchType: String(p.matchType || ""),
      sector: String(p.sector || sector),
    }))
    .filter((p) => p.suggestedRetailUsd > 0 && p.name);
}

function haystack(p: any) {
  return [p.name, p.title, p.category, ...(Array.isArray(p.tags) ? p.tags : []), p.sku].join(" ").toLowerCase();
}

async function enrichFromLive(token: string, shopId: string, curatedProducts: any[]) {
  try {
    const apiUrl = new URL(BASE + `/shops/${shopId}/products.json`);
    apiUrl.searchParams.set("limit", "50");
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}`, "User-Agent": "NordicStore/1.0" },
    });
    if (!response.ok) return curatedProducts;
    const result: any = await response.json();
    const list = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    if (!list.length) return curatedProducts;

    const typeWords: Record<string, string[]> = {
      tote: ["tote", "bag"],
      tee: ["t-shirt", "tshirt", "tee", "shirt"],
      mug: ["mug", "cup", "coffee"],
      crewneck: ["crewneck", "crew neck", "sweatshirt"],
      hoodie: ["hoodie", "zip"],
      poster: ["poster", "print"],
      case: ["case", "phone", "tough"],
      cap: ["cap", "hat"],
    };

    return curatedProducts.map((item) => {
      const words = typeWords[String(item.matchType || "").toLowerCase()] || [];
      const match = list.find((live: any) => {
        const id = String(live?.id || "");
        if (item.printifyProductId && id && id === item.printifyProductId) return true;
        if (!words.length) return false;
        const text = haystack({ name: live?.title, tags: live?.tags, sku: "" });
        return words.some((w) => text.includes(w));
      });
      if (!match) return item;
      const variants = Array.isArray(match.variants) ? match.variants : [];
      const enabled = variants.find((v: any) => v?.is_enabled !== false) || variants[0] || {};
      const images = Array.isArray(match.images) ? match.images : [];
      const image = images.find((img: any) => img?.is_default)?.src || images[0]?.src || item.image;
      const cost = money(enabled.cost);
      const retail = money(enabled.price) || (cost > 0 ? Math.round(cost * 2.2 * 100) / 100 : 0);
      return {
        ...item,
        printifyProductId: String(match.id || item.printifyProductId || ""),
        printifyVariantId: String(enabled.id || item.printifyVariantId || ""),
        sku: String(enabled.sku || item.sku || ""),
        supplierPriceUsd: cost || item.supplierPriceUsd,
        suggestedRetailUsd: retail || item.suggestedRetailUsd,
        image: image || item.image,
        enriched: true,
      };
    });
  } catch (_) {
    return curatedProducts;
  }
}

export async function onRequestGet(context: any) {
  const url = new URL(context.request.url);
  const wanted = url.searchParams.get("q") || url.searchParams.get("sector") || "";
  const defaultSector = String(SELECTED[0]?.sector || "beauty");
  const sector = resolveSector(wanted || defaultSector);
  const headers = {
    "access-control-allow-origin": "*",
    "cache-control": "public, max-age=60",
  };

  // PRIMARY: curated per-store list. Live Printify only enriches — never replaces.
  let products = curated(sector).slice(0, 30);
  const token = context.env.PRINTIFY_API_TOKEN;
  const shopId = context.env.PRINTIFY_SHOP_ID || "28847802";
  if (token && products.length) {
    products = await enrichFromLive(String(token), String(shopId), products);
  }

  return Response.json(
    {
      ok: true,
      supplier: "printify",
      sector,
      query: sector,
      products,
      count: products.length,
      source: "printify-selected-primary",
      markets: ["NO", "EU", "PE"],
    },
    { status: products.length ? 200 : 503, headers }
  );
}
