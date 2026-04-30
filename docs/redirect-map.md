# Heat & Glo — Redirect Map

301 redirects required at launch. Phase 2 implements these in `next.config.js` `redirects()` (or via Vercel `vercel.json` for static-deploy fallback).

## Format
Each row is `OLD_PATH → NEW_PATH` with the 301 permanent disposition. Trailing-slash policy: keep trailing slashes consistent with the current site (which uses trailing slashes throughout) — do not flip the convention as part of this migration.

## Path-normalization redirects (12)
```
/products/electric-inserts/                       → /products/electric-fireplaces/inserts/
/products/wood-inserts/                           → /products/wood-fireplaces/inserts/
/products/outdoor-fire-pits/                      → /products/outdoor-fireplaces/fire-pits/
/products/outdoor-gas-log-sets/                   → /products/outdoor-fireplaces/log-sets/
/owner-resources/recall-information/              → /owner-resources/recalls/
/architect/                                       → /pro/
/architect/proadvantage/                          → /pro/proadvantage/
/architect/bim-library/                           → /pro/bim-library/
/architect/aia-continuing-education/              → /pro/aia-continuing-education/
/architect/designers-on-fire/                     → /pro/designers-on-fire/
/privacy-policy/                                  → /privacy/
/terms-of-use/                                    → /terms/
```

## Merge redirects (10)
```
/products/escape-fireplaces/                      → /products/gas-fireplaces/?series=escape
/products/6000-series/                            → /products/gas-fireplaces/?series=6000
/products/simplifire-allusion/                    → /products/allusion/?fuel=electric
/fireplace-safety/                                → /owner-resources/safety-screens/
/blog/category/design-trends/                     → /blog/?category=design-trends
/blog/category/installation/                      → /blog/?category=installation
/blog/category/dealer-spotlight/                  → /blog/?category=dealer-spotlight
/blog/category/owner-tips/                        → /blog/?category=owner-tips
/inspiration/lookbook/                            → /inspiration/by-style/
/inspiration/style-gallery/                       → /inspiration/by-style/
```

## Architect-section regex catch (Phase 2)
Belt-and-suspenders rule for any deeper architect path we haven't enumerated:
```
source: /architect/:path*
destination: /pro/:path*
permanent: true
```

## Locale redirects
- `/` (no locale prefix) → English-US default. No redirect; serves directly.
- `/es/*` — new prefix; no old paths to redirect.
- `/ca/*` — new prefix; no old paths to redirect.
- `/ca/fr/*` — new prefix; no old paths to redirect.

If the old site ever served any localized paths (none observed in the sitemap export, but worth confirming during Phase 2 crawl), they get added to this map then.

## Kill redirects
URLs that fold into the nearest valid parent rather than staying alive:
```
/inspiration/legacy-galleries/                    → /inspiration/
/products/discontinued/                           → /products/
/about/press-room/                                → /about/
/about/press-releases/                            → /about/
/blog/tag/*                                       → /blog/
```

The remaining KILL items are placeholder/preview/empty URLs from the sitemap that don't deserve hand-tuned redirect targets — `redirect to /` is the right behavior.

## Verification at launch
- Crawl old sitemap with HTTPie or `curl -I` for each URL on the new domain — every result must be 200 (KEEP) or 301 (everything else). Any 404 fails the launch gate.
- Spot-check 20 random redirects in browser to confirm they hit the intended target without redirect chains.
- Submit new sitemap to Google Search Console + Bing Webmaster Tools the day of launch.

## hreflang declarations (added at the same time, not a redirect but related)
Each page emits four `<link rel="alternate" hreflang>` tags:
```html
<link rel="alternate" hreflang="en-US" href="https://heatnglo.com{path}" />
<link rel="alternate" hreflang="es-US" href="https://heatnglo.com/es{path}" />
<link rel="alternate" hreflang="en-CA" href="https://heatnglo.com/ca{path}" />
<link rel="alternate" hreflang="fr-CA" href="https://heatnglo.com/ca/fr{path}" />
<link rel="alternate" hreflang="x-default" href="https://heatnglo.com{path}" />
```
