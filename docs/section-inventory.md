# Heat & Glo — Section Inventory

Inventoried from `previews/mockup-locked.html` (the `mockup-approved` tag commit). Order matches the rendered DOM between `</header>` and `<footer>`.

Global chrome — already extracted in Phase 3, NOT block components: `TopUtilityStrip`, `Header`, `Footer`, `StickyCta`.

| # | DOM anchor | Component name | Metaphor label | Purpose | Data shape |
|---|---|---|---|---|---|
| 1 | `<section class="hero">` | `HeroBlock` | Hero — Headline + ZIP locator | Full-bleed lifestyle photo, rebate copy, dual CTA, glassmorphic ZIP search, dealer-proximity badge | scalar: `eyebrow_rating`, `heading`, `lede`, `cta_primary_text` + `cta_primary_href`, `cta_secondary_text` + `cta_secondary_href`, `microcopy`, `zip_label`, `zip_placeholder`, `zip_button_text`, `proximity_text`, `background_image`, `background_image_alt`, `currency_amount` |
| 2 | `<section class="trust">` | `TrustStripBlock` | Heritage Trust Strip | 4-cell stat row (50yrs · 2.4M+ · 1,400+ · USA) reinforcing brand longevity + scale | array `items`: { icon, num, num_unit?, label } × 4 |
| 3 | `<section class="feature" id="promo">` | `LoveYourFireplaceBlock` | Love Your Fireplace Again | Composite before/after photo + persuasive rebate copy + dark CTA | scalar: `eyebrow`, `heading`, `paragraph_1`, `paragraph_2`, `cta_text` + `cta_href`, `media_image` + `media_image_alt`, `media_position` ('left' \| 'right') |
| 4 | `<section class="types" id="types">` | `BrowseLineupBlock` | Browse the Lineup — 4 product types | Above-the-fold product taxonomy: Gas / Electric / Wood / Outdoor cards with photo + descriptor + count | scalar: `eyebrow`, `heading`, `lede`; array `cards`: { image, image_alt, title, sub, cta_text, cta_href } × 4 |
| 5 | `<section class="feature feature--alt" id="proadvantage">` | `ProAdvantageBlock` | ProAdvantage Trade Strip | Trade-audience strip with reverse media position pointing to BIM/AIA/wholesale program | same shape as `LoveYourFireplaceBlock` (reused `feature` markup); `media_position: 'left'` |
| 6 | `<section class="feature" id="inspiration">` | `TVWallsBlock` | Six TV Wall Designs Editorial | Inspiration content tease — long-read about fireplace + TV coexistence | same shape as `LoveYourFireplaceBlock`; `media_position: 'right'` |
| 7 | `<section class="press">` | `PressStripBlock` | As Featured In | Logo row of publications + dealer org affiliations (text-styled press logos) | scalar: `lead_text`; array `logos`: { name, emphasis ('regular' \| 'bold') } × N |
| 8 | `<section class="faq">` | `FaqBlock` | Common Questions | 6-item accordion using native `<details>` — gas-vs-wood-vs-electric, install timeline, consultation scope, financing, insert compatibility, ENERGY STAR | scalar: `eyebrow`, `heading`; array `items`: { question, answer } × 6 |
| 9 | `<section class="quote" id="why">` | `QuoteBlock` | Owner Quote — Cosmo / Twin Cities | 5-star pull quote from a verified owner | scalar: `stars` (number), `quote_body`, `attribution_name`, `attribution_meta` |

## Notes

- `ProAdvantageBlock` and `TVWallsBlock` use the same DOM template as `LoveYourFireplaceBlock` (`.feature` class with optional `.feature__row--reverse` modifier). They could be a single `FeatureSplitBlock` with `media_position` + `eyebrow_kind` props. Phase 4 splits them into 3 distinct named blocks per the inventory rule ("don't combine visually separate sections") + because each has a distinct CMS purpose (rebate offer / trade onboarding / editorial tease) and editors will want to add/remove them independently.
- `PressStripBlock` uses text-styled "logo" spans rather than image logos in the Phase 0 mockup — that was deliberate (no real logo licensing yet). When real press logos arrive, the block's `logos` array can swap to image entries via a Phase 6 schema variant. For Phase 4 the block stays text-only.
- `QuoteBlock` is intentionally single-quote, not a carousel. Adding multi-quote support is a Phase 8 enhancement (`QuoteCarouselBlock`) once Heat & Glo provides a real quote bank.
- Hero ZIP search currently `event.preventDefault()`s + alerts. Phase 7 wires submit to `/where-to-buy?zip=...` with proper loader.

## Treatment summary

9 block components total. Each ships with:
- `data-editable="text"` + `data-prop` on every visible string
- `data-editable="image"` + `data-prop-src` + `data-prop-alt` on every image
- `data-editable="array"` + `data-prop` on every list container, `data-editable="array-item"` on each child
- Block Delivery Standard variant props (`bg_variant`, `alignment`, `density`, `hidden_on_mobile`, `{cta_name}_variant`)
- Locale-agnostic: no `Astro.url` reads inside blocks; localization happens up-tree in `ContentBlocks.astro`
