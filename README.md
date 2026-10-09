# Fortenergi — Trening og friluftsliv

Nettbutikk: **Fortenergi** · https://fortenergi.no/ · «Kom deg ut. Bli sterkere.»

Norsk nettbutikk for treningsutstyr og friluftsliv. Identitet: energi nordisk (sort #111111, lime #C6F432, gran #1F4D3A). Frakt 79 kr i Norge · 14 dagers angrerett · kortbetaling via Stripe.

## Commerce

Butikken har `/api/cj-products` og `/api/order`. Konfigurer `CJ_API_KEY` og `MAKE_ORDERS_WEBHOOK` i Netlify; hemmeligheter skal aldri committes.

Betaling forblir stengt til lager, landed cost, leveringstid, produktkrav og betalingsleverandør er verifisert.

## Leverandørkataloger

- CJ | Printify | Gelato | Printful — `window.nordicCatalogs` holder arrayene adskilt.
- Env: `PRINTIFY_API_TOKEN`, `GELATO_API_KEY`, `PRINTFUL_API_TOKEN`, `CJ_API_KEY`. Se `STRIPE-SETUP.md`.
