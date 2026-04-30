# Heat & Glo — URL Migration Ledger

**Source sitemap:** `https://www.heatnglo.com/sitemap.xml` — 243 URLs as of 2026-04-29.

**Disposition codes**
- **KEEP** — URL stays at the same path on the new site
- **MERGE** — URL content folds into another page; old URL 301s to merged target
- **KILL** — URL removed entirely; redirects to the closest parent or to `/`
- **NEW** — URL did not exist on the old site, created in the rebuild

This ledger lists the **top 50 URLs** explicitly (by traffic + strategic importance) and then provides **pattern rules** for the remaining 193, which Phase 2 will apply mechanically against the full sitemap export.

## Top 50 explicit dispositions

### Home + global
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/` | KEEP | `/` | Match-and-elevate; new sections per `brand.md` |
| `/sitemap.xml` | KEEP | `/sitemap.xml` | Regenerated; will include hreflang alternates |
| `/robots.txt` | KEEP | `/robots.txt` | Regenerated; allow-all + sitemap reference |
| `/404` | KEEP | `/404` | Custom 404 with dealer-locator + popular-products fallback |

### Products — gas
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/products/gas-fireplaces/` | KEEP | `/products/gas-fireplaces/` | Hub page; gets hero photo + filter sidebar |
| `/products/cosmo/` | KEEP | `/products/cosmo/` | Flagship; full PDP rebuild with spec + photo gallery + dealer-finder CTA |
| `/products/mezzo/` | KEEP | `/products/mezzo/` | Flagship |
| `/products/true/` | KEEP | `/products/true/` | Flagship |
| `/products/supremex/` | KEEP | `/products/supremex/` | Flagship; hero photo currently used in our v2 mockup |
| `/products/inception/` | KEEP | `/products/inception/` | Flagship |
| `/products/allusion/` | KEEP | `/products/allusion/` | Flagship |
| `/products/triton/` | KEEP | `/products/triton/` | Flagship |
| `/products/escape-fireplaces/` | MERGE | `/products/gas-fireplaces/?series=escape` | Folded into hub with series filter |
| `/products/6000-series/` | MERGE | `/products/gas-fireplaces/?series=6000` | Folded into hub |

### Products — electric
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/products/electric-fireplaces/` | KEEP | `/products/electric-fireplaces/` | Hub |
| `/products/simplifire-allusion/` | MERGE | `/products/allusion/?fuel=electric` | Allusion is a cross-fuel line |
| `/products/electric-inserts/` | KEEP | `/products/electric-fireplaces/inserts/` | Path normalized to nested |

### Products — wood
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/products/wood-fireplaces/` | KEEP | `/products/wood-fireplaces/` | Hub |
| `/products/wood-inserts/` | KEEP | `/products/wood-fireplaces/inserts/` | Path normalized |

### Products — outdoor
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/products/outdoor-fireplaces/` | KEEP | `/products/outdoor-fireplaces/` | Hub |
| `/products/outdoor-fire-pits/` | KEEP | `/products/outdoor-fireplaces/fire-pits/` | Path normalized |
| `/products/outdoor-gas-log-sets/` | KEEP | `/products/outdoor-fireplaces/log-sets/` | Path normalized |

### Where-to-buy + dealer
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/where-to-buy/` | KEEP | `/where-to-buy/` | Locator gets new hero + map UI; backend unchanged in Phase 2 |
| `/apply-for-dealership/` | KEEP | `/apply-for-dealership/` | Form preserved; better surfaced in footer + ProAdvantage section |

### Architect / trade
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/architect/` | KEEP | `/pro/` | **Renamed** — "Pro" reads cleaner and matches the ProAdvantage program name |
| `/architect/proadvantage/` | KEEP | `/pro/proadvantage/` | |
| `/architect/bim-library/` | KEEP | `/pro/bim-library/` | |
| `/architect/aia-continuing-education/` | KEEP | `/pro/aia-continuing-education/` | |
| `/architect/designers-on-fire/` | KEEP | `/pro/designers-on-fire/` | |

### Owner resources
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/owner-resources/` | KEEP | `/owner-resources/` | Hub |
| `/owner-resources/manuals/` | KEEP | `/owner-resources/manuals/` | |
| `/owner-resources/parts/` | KEEP | `/owner-resources/parts/` | |
| `/owner-resources/safety-screens/` | KEEP | `/owner-resources/safety-screens/` | Free safety screen request form |
| `/owner-resources/recall-information/` | KEEP | `/owner-resources/recalls/` | Path normalized |
| `/fireplace-safety/` | MERGE | `/owner-resources/safety-screens/` | Standalone safety page folded into owner-resources |

### Inspiration
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/inspiration/` | KEEP | `/inspiration/` | Hub |
| `/inspiration/six-tv-wall-designs/` | KEEP | `/inspiration/six-tv-wall-designs/` | Featured on home; preserved exactly |
| `/inspiration/by-room/` | KEEP | `/inspiration/by-room/` | |
| `/inspiration/by-style/` | KEEP | `/inspiration/by-style/` | |

### Get started
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/get-started/` | KEEP | `/get-started/` | Hub |
| `/get-started/gas-vs-wood-vs-electric/` | KEEP | `/get-started/gas-vs-wood-vs-electric/` | High SEO value |
| `/get-started/sizing-tool/` | KEEP | `/get-started/sizing-tool/` | |
| `/get-started/installation-guide/` | KEEP | `/get-started/installation-guide/` | |

### About + corporate
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/about/` | KEEP | `/about/` | |
| `/about/heritage/` | KEEP | `/about/heritage/` | 1975-founding story |
| `/about/leadership/` | KEEP | `/about/leadership/` | |
| `/about/careers/` | KEEP | `/about/careers/` | |
| `/about/sustainability/` | KEEP | `/about/sustainability/` | |
| `/contact/` | KEEP | `/contact/` | Phone + email + form |

### Promotions
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/promotions/gas-insert-rebate/` | KEEP | `/promotions/gas-insert-rebate/` | Active offer; copied across all 4 locales |

### Legal
| Old URL | Disposition | New URL | Notes |
|---|---|---|---|
| `/privacy-policy/` | KEEP | `/privacy/` | Path normalized |
| `/terms-of-use/` | KEEP | `/terms/` | Path normalized |
| `/accessibility/` | KEEP | `/accessibility/` | |

## Pattern rules for the remaining 193

### Pattern A — `/products/*` (≈45 remaining)
- All KEEP at the same path.
- Path normalization: any product currently nested under a series subfolder (e.g., `/products/escape-fireplaces/escape-i30/`) flattens to `/products/escape-i30/` with a series filter on the hub.
- All product detail pages get full PDP treatment in Phase 2 with: hero photo + spec table + photo gallery + 360 viewer (where existing) + dealer-finder ZIP CTA + "Find this at a dealer near you" badge.

### Pattern B — `/inspiration/*` (≈48 remaining)
- All KEEP at the same path.
- Pages that are essentially photo-only galleries with sparse copy get H1 + intro paragraph rewrites for SEO.

### Pattern C — `/blog/*` (≈40)
- All KEEP at the same path.
- Tag/category facets (`/blog/category/*`) MERGE into faceted browsing on the blog hub (`/blog/?category=X`).
- Author pages KEEP — Designers on Fire roster overlap is a feature.

### Pattern D — `/owner-resources/*` (≈25 remaining)
- All KEEP at the same path.

### Pattern E — Empty / placeholder / parameterized URLs (≈35)
- URLs returning 404, soft-404, or pure query-string variants (`?utm=`, `?_=`) — KILL with 301 to nearest parent.
- Sanity preview-only paths — KILL.

## Redirect strategy summary
- Total URLs: 243
- KEEP at same path: ~210 (86%)
- Path-normalized (KEEP with rename): ~12 (5%)
- MERGE with 301 to consolidated target: ~10 (4%)
- KILL with 301 to parent: ~11 (5%)
- 404s preserved as 404s: 0 (any old 404 becomes a redirect to the most relevant page)

The full mechanical disposition for all 243 URLs becomes a CSV in Phase 2 (`/data/url-dispositions.csv`) generated from the sitemap export + this ledger's pattern rules.
