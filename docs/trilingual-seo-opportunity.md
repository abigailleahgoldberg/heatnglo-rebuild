# Heat & Glo — Trilingual SEO Opportunity Audit

The current site is English-only on a `.com` (gTLD) at one global hreflang context. Heat & Glo's parent (Hearth & Home Technologies) sells through ~1,400 dealers across the US + Canada. The trilingual + dual-currency rebuild unlocks search demand the current setup is invisible to.

## Markets in scope

| Market | Locale | Currency | Path | Search engine | Estimated audience size |
|---|---|---|---|---|---|
| US English | en-US | USD | `/` | Google US | ~265M Internet users |
| US Spanish | es-US | USD | `/es/` | Google US (Spanish) | ~42M US Spanish speakers |
| Canada English | en-CA | CAD | `/ca/` | Google CA | ~30M Anglophone Canadians |
| Canada French | fr-CA | CAD | `/ca/fr/` | Google CA (French) | ~7.5M Francophone Canadians (Quebec + NB + ON minorities) |

Spanish in the US and French in Canada are not optional add-ons — they are jurisdictionally + commercially significant audiences whose dealers already exist in Heat & Glo's network.

## Search volume estimates (rough monthly Google volumes, US + CA combined unless noted)

These are best-effort estimates from public keyword tools (Google Keyword Planner, Search Console-comparable third-party sources). Phase 2 commissions a paid SEMrush / Ahrefs export for hard numbers; this section is the qualitative bet.

### English-US — already partially captured
| Keyword | Est. US monthly | Current Heat & Glo capture |
|---|---|---|
| gas fireplace | 33,000 | ~12 (page 2 in many SERPs) |
| electric fireplace | 90,000 | not in top 30 |
| wood burning fireplace | 18,000 | not in top 30 |
| outdoor fireplace | 27,000 | not in top 30 |
| gas fireplace insert | 18,000 | ~8 |
| fireplace dealer near me | 9,900 | ~15 (locator page) |
| fireplace installation | 8,100 | not strong |
| heat n glo / heat and glo | 22,000 | #1–3 (brand) |
| stellar fireplace | 1,300 | #1 (brand) |
| ventless gas fireplace | 6,600 | not strong |
| **Estimated total addressable EN-US queries:** | **~280K/mo** | |

**Diagnosis:** brand terms are protected. Generic category terms are leaking to Wayfair, Lowe's, Home Depot, Modern Flames, and content-farm review sites. The new home page's 4-card "Browse the Lineup" + the PDP rebuild + FAQ schema are designed to recover ~10–15% of generic category traffic.

### Spanish-US — uncaptured
| Keyword | Est. US monthly | Current Heat & Glo capture |
|---|---|---|
| chimenea de gas | 14,800 | none — no es-US pages exist |
| chimenea eléctrica | 22,000 | none |
| estufa de leña | 9,900 | none |
| chimenea para exterior | 8,100 | none |
| inserto de chimenea de gas | 3,600 | none |
| distribuidor de chimeneas cerca de mí | 2,900 | none |
| **Estimated total addressable ES-US queries:** | **~90K/mo** | **0% captured** |

**Diagnosis:** US Spanish-speaking demand for fireplaces concentrates in Texas, California, Arizona, New Mexico, Colorado, and Florida — all states with Heat & Glo dealer density. The brand's Spanish-speaking dealer network exists; the website doesn't speak the language. A locale-routed `/es/` site with translated PDPs + a Spanish dealer locator captures this 90K/mo cleanly. Even 5% capture is ~4,500 new monthly sessions.

### English-CA — partially capturable but invisible
| Keyword | Est. CA monthly | Current Heat & Glo capture |
|---|---|---|
| gas fireplace canada | 4,400 | weak (no `/ca/` site, no CAD pricing) |
| electric fireplace canada | 8,100 | weak |
| wood fireplace canada | 2,400 | weak |
| outdoor fireplace canada | 1,900 | weak |
| fireplace store toronto | 1,600 | weak |
| fireplace store vancouver | 1,000 | weak |
| **Estimated total addressable EN-CA queries:** | **~30K/mo** | **<2% captured** |

**Diagnosis:** Canadian buyers searching with "canada" qualifier are explicitly looking for in-country dealers + CAD pricing. Current site shows USD prices and US dealers — bounce rate is high. A `/ca/` locale with CAD currency + Canadian dealer prioritization in the locator should capture 5–10% of this market.

### French-CA — uncaptured (Quebec is the prize)
| Keyword | Est. CA monthly | Current Heat & Glo capture |
|---|---|---|
| foyer au gaz | 3,600 | none |
| foyer électrique | 5,400 | none |
| foyer au bois | 1,900 | none |
| foyer extérieur | 1,300 | none |
| insert de foyer au gaz | 880 | none |
| détaillant de foyers près de chez moi | 480 | none |
| **Estimated total addressable FR-CA queries:** | **~14K/mo** | **0% captured** |

**Diagnosis:** Quebec is a substantial fireplace market — long heating season, dealer network exists (Foyers Élégance, Atelier du Foyer, Le Spécialiste du Foyer, etc.). French-language site with locale-routed `/ca/fr/` paths and Quebec-prioritized locator results captures meaningful traffic. The Quebec Office québécois de la langue française (OQLF) preference for French-language commerce sites is also a soft regulatory tailwind for selling into Quebec.

## Combined opportunity

| Locale | Est. addressable monthly queries | Realistic capture target (12–18 months post-launch) |
|---|---|---|
| en-US | 280,000 | +10–15% of generic category = +28K–42K sessions |
| es-US | 90,000 | +5–8% (zero baseline = easier wins) = +4.5K–7.2K sessions |
| en-CA | 30,000 | +5–10% = +1.5K–3K sessions |
| fr-CA | 14,000 | +3–5% (zero baseline) = +420–700 sessions |
| **Total** | **~414K queries/mo** | **+34K–53K incremental sessions/mo** |

These are rough order-of-magnitude estimates intended to justify the trilingual investment, not a forecast we'd publish to the client unaltered. Phase 2 firms them up with paid keyword data.

## Implementation notes for Phase 2 SEO
- **hreflang tags on every page** (en-US, es-US, en-CA, fr-CA, x-default) — required for Google to understand the locale matrix.
- **Locale-specific titles + meta descriptions** — never machine-translate metadata; have a Spanish + Quebec-French copywriter pass on at least the top 30 pages.
- **Locale-specific schema** — `LocalBusiness` entries for Canadian dealers separate from US dealers; `inLanguage` field set per locale.
- **Locale-specific dealer locator** — the locator endpoint takes a locale parameter and prioritizes results in-region (US zip → US dealers, CA postal code → CA dealers).
- **Locale-specific currency** — CAD on `/ca/*`, USD on US locales, with the dual-currency picker overriding for cross-border shoppers.
- **Locale-specific blog content** — translation isn't enough for the blog; eventually each locale needs locally-relevant posts (e.g., "best fireplaces for Quebec winters" for fr-CA).
- **Hreflang xx-default** points at the en-US root — global default for unknown locales.

## What this is NOT
- This is not international expansion. The four locales are the four markets HHT already sells into. We're matching the website to the existing distribution footprint, not adding new countries.
- This is not Latin American Spanish (es-MX, es-AR, etc.) — those are separate audiences with separate dealer networks Heat & Glo doesn't have. `es-US` only.
- This is not full European French (fr-FR) — Quebec French uses different conventions (e.g., "courriel" not "e-mail," "magasinage" not "shopping," "fin de semaine" not "weekend"). The fr-CA copywriter must be Quebecois or Canadian, not Parisian.
