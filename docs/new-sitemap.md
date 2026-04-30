# Heat & Glo — Proposed New Sitemap

This is the page tree Phase 2 builds against. Multiplied by 4 locales (en-US, es-US, en-CA, fr-CA) for the routed pages.

## Top level (visible in primary nav)
```
/                                Home
/products/                       Products hub
/inspiration/                    Inspiration hub
/where-to-buy/                   Dealer locator (primary CTA destination)
/pro/                            ProAdvantage (renamed from /architect)
/owner-resources/                Owner resources hub
/blog/                           Blog hub
/about/                          About hub
/contact/                        Contact
```

## Full tree
```
/
├── products/
│   ├── gas-fireplaces/
│   │   ├── inserts/
│   │   ├── direct-vent/
│   │   ├── b-vent/
│   │   ├── ventless/
│   │   ├── linear/
│   │   ├── traditional/
│   │   ├── log-sets/
│   │   └── [18 model PDPs — cosmo, mezzo, true, supremex, inception, allusion, triton, …]
│   ├── electric-fireplaces/
│   │   ├── inserts/
│   │   ├── wall-mount/
│   │   ├── built-in/
│   │   └── [9 model PDPs]
│   ├── wood-fireplaces/
│   │   ├── inserts/
│   │   └── [7 model PDPs]
│   ├── outdoor-fireplaces/
│   │   ├── fire-pits/
│   │   ├── log-sets/
│   │   ├── built-in/
│   │   ├── patio/
│   │   └── [11 model PDPs]
│   ├── accessories/
│   └── compare/                                ← NEW — side-by-side product comparison tool
│
├── inspiration/
│   ├── by-room/
│   │   ├── living-room/
│   │   ├── bedroom/
│   │   ├── outdoor/
│   │   ├── kitchen/
│   │   └── basement/
│   ├── by-style/
│   │   ├── modern/
│   │   ├── traditional/
│   │   ├── transitional/
│   │   └── rustic/
│   ├── six-tv-wall-designs/
│   └── [individual gallery posts]
│
├── where-to-buy/
│   ├── ?zip={zip}                              ← search param drives results
│   └── apply-for-dealership/                   ← dealer applicants
│
├── pro/                                        ← renamed from /architect
│   ├── proadvantage/
│   ├── bim-library/
│   ├── aia-continuing-education/
│   ├── designers-on-fire/
│   │   └── [designer profile pages]
│   ├── design-tools/
│   └── trade-pricing/
│
├── owner-resources/
│   ├── manuals/
│   ├── parts/
│   ├── safety-screens/                         ← free safety screen request
│   ├── recalls/
│   ├── troubleshooting/
│   ├── installation-help/
│   └── warranty/
│
├── get-started/
│   ├── gas-vs-wood-vs-electric/
│   ├── sizing-tool/
│   ├── installation-guide/
│   ├── venting-explained/
│   └── budget-calculator/                      ← NEW — quick budget estimator
│
├── blog/
│   ├── ?category={cat}                         ← faceted (replaces old /blog/category/*)
│   └── [individual posts]
│
├── about/
│   ├── heritage/                               ← 1975-founding story
│   ├── leadership/
│   ├── careers/
│   ├── sustainability/
│   └── newsroom/                               ← consolidated press releases
│
├── promotions/
│   └── gas-insert-rebate/                      ← active offer; 4 locale variants
│
├── contact/
│
└── (legal)
    ├── privacy/
    ├── terms/
    ├── accessibility/
    └── cookie-preferences/
```

## Routing convention for locales
```
/                       → en-US (default, no prefix)
/es/                    → es-US
/ca/                    → en-CA
/ca/fr/                 → fr-CA
```

The path tree is identical under each locale prefix. Some content (legal pages, dealer-locator results) is locale-aware at runtime — addressed in Phase 2.

## What's NEW (not on the old site)
- `/products/compare/` — side-by-side product comparison
- `/get-started/budget-calculator/` — quick estimator with rebate overlay
- `/about/newsroom/` — consolidated press hub
- Faceted blog browsing (`/blog/?category=…`) replacing dedicated `/blog/category/*` URLs
- Locale-prefixed routes (`/es/`, `/ca/`, `/ca/fr/`)

## What's REMOVED
- `/architect/*` — renamed to `/pro/*`
- `/blog/category/*` — folded into faceted blog hub
- `/inspiration/lookbook/`, `/inspiration/style-gallery/` — consolidated to `/inspiration/by-style/`
- `/about/press-room/`, `/about/press-releases/` — consolidated to `/about/newsroom/`
- Sundry preview/empty URLs — killed with redirects to nearest parent

## Total page count estimate (per locale)
- Home: 1
- Products hub + sub-hubs + PDPs: ~75
- Inspiration hub + sub-hubs + galleries: ~55
- Pro hub + sub-pages + designer profiles: ~15
- Owner resources hub + sub-pages: ~25
- Get started hub + guides: ~6
- Blog hub + posts: ~40
- About hub + sub-pages: ~6
- Contact + locator + dealer apply + promotions + legal: ~10

**Per locale: ~233 pages.**
**Across 4 locales (en-US default + es-US + en-CA + fr-CA): ~932 routes.**

Most of the locale variants are content-translated rather than structurally different. Sanity (or replacement CMS) carries the locale-keyed strings against the same document.
