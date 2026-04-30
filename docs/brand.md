# Heat & Glo — Brand System (Approved Direction)

This is the brand system locked from the approved `heatnglo-v2` mockup. Phase 2 implements against this exactly.

## Paradigm
**Match-and-elevate.** Not a clean-slate brand reinvention. Mirror the existing visual language (palette, photography style, CTA shape, section rhythm) and add measurable improvements on top. The audit user can recognize this as Heat & Glo within 1 second.

## Color
| Token | Hex | Usage | Contrast |
|---|---|---|---|
| `--brand-black` | `#0e0e0e` | Primary text, footer bg, secondary CTA bg | 21:1 on white |
| `--brand-white` | `#ffffff` | Page bg, primary CTA text | — |
| `--orange-1` | `#e85a0c` | Brand accent, decorative rules under headlines, hover states on text links | 4.1:1 on white (decorative only) |
| `--orange-2` | `#c44a08` | All CTA backgrounds where text is white | **5.3:1 on white — AA pass for normal text** |
| `--gray-100` | `#f5f5f4` | Section bg alternation, soft borders |
| `--gray-300` | `#d4d4d4` | Form inputs, dividers |
| `--gray-500` | `#737373` | Body de-emphasized, captions |
| `--gray-700` | `#404040` | Body alt for sections on white |

**Rule:** any CTA with white text uses `--orange-2` (#c44a08), not `--orange-1`. The lighter orange is reserved for decorative accents, hover effects on text links, and the underline rules below section headlines. This is the WCAG AA fix the current heatnglo.com fails.

## Typography
- **Headings:** DM Sans, weights 500/600/700. Geometric sans, modern but not cold. Pairs naturally with the brand's photography-forward feel.
- **Body:** Roboto, weights 400/500. Workhorse readability; plays nicely with DM Sans without competing.
- **Numerals:** tabular figures on prices and pricing tables (`font-variant-numeric: tabular-nums`).

**Banned (per Phase 0 paradigm rules):** Fraunces, Cormorant, Lora — these are editorial/luxury serifs that read wrong for a manufacturing brand selling through dealers.

## Logo
- Primary mark: stylized ampersand wordmark from `cdn.sanity.io/images/upnkuzzs/production/c8d18cd6ba09806e42f638b4a86432c4b6582662-225x40.svg`.
- Use on white headers (default) and on photography hero overlays (white SVG variant when needed).
- Minimum width: 140 px desktop / 100 px mobile. Below that, the ampersand loses legibility.
- Clearspace: 1× cap height of the wordmark on all sides.

## Imagery
- **Source:** Heat & Glo's existing Bynder DAM at `hearthnhome.getbynder.com`. We use the parameterized transform URL pattern: `transform/<id>/...?io=transform:fill,width:X,height:Y`.
- **Style:** real-room lifestyle shots — couples, families, pets, full living-room contexts. The fire is the focal point but never the only subject.
- **Hero standard:** 1920×1080 desktop / 750×900 mobile portrait crop. Dark enough through midtones to support white-text overlay. We're using SupremeX cinematic exterior + Cosmo interior + Mezzo modern minimal as the rotation.
- **Avoid:** product-on-white isolated shots in hero/marketing positions. Those are reserved for the Browse the Lineup card grid where they're appropriate.

## CTA System
- **Primary CTA:** orange `#c44a08` background, white text, 8px radius, 14–16px vertical padding.
  - Hover: `#9c3806` (darker still). Subtle lift via `translateY(-1px)` + soft shadow.
- **Secondary CTA:** black `#0e0e0e` background, white text, same radius/padding. Used sparingly — primary actions = orange.
- **Tertiary / outline (header utility):** transparent background, orange `#c44a08` border, orange text. Hover: solid orange fill, white text.
  - **CSS specificity note:** the header link rule `.header__util > a:hover { color: var(--orange-2) }` was clobbering button text-color on hover, making the white text appear as orange-on-orange (invisible). Fix: scope it as `.header__util > a:not(.btn):hover` so buttons keep their button hover behavior.

## Section rhythm (mirrored from current site, then improved)
1. **Top utility strip** — rebate banner + region/language picker (new)
2. **Header** — logo left, primary nav center, "Where to Buy" + "Request Consultation" right
3. **Sticky thin nav** (new) — appears on scroll, lighter than full header, keeps "Find a Dealer" reachable
4. **Hero** — full-bleed lifestyle photo, headline + subhead + ZIP locator + dealer-proximity badge (new)
5. **Trust strip** — "1,400+ authorized dealers · Founded 1975 · Designed in Lake City, MN" (new)
6. **Love Your Fireplace Again** — composite before/after with copy (mirrored from current)
7. **Browse the Lineup** — 4 product-type cards: Gas / Electric / Wood / Outdoor (new on home; existed buried)
8. **ProAdvantage** — full-width strip pointing trade audience to BIM/AIA/wholesale program (mirrored)
9. **Six TV Wall Designs** — inspiration grid (mirrored from current)
10. **FAQ** — 6 items (new) — gas-vs-wood, install timeline, rebate eligibility, dealer process, electric in cold climates, safety screens
11. **Press strip** — logo row of publications + dealer org affiliations (new)
12. **Quote** — single designer-on-fire pull quote (new)
13. **Footer** — full sitemap nav, region/language repeat, social, address, phone

## Voice + tone
- Confident but not boastful. The brand is 50 years old; we don't need to oversell.
- Lead with the homeowner outcome ("warm your home in winter") before the product spec.
- Trade-audience copy (ProAdvantage section) shifts to direct industry vocabulary: "BIM library," "AIA continuing-ed credits," "wholesale tier."
- Multilingual: ES-US is conversational/warm, FR-CA is slightly more formal (Canadian French convention).

## Accessibility
- All interactive controls keyboard-reachable, visible focus ring (`outline: 2px solid var(--orange-2); outline-offset: 2px`).
- `prefers-reduced-motion: reduce` collapses parallax, hero crossfade, sticky-nav slide-in to instant transitions.
- Color contrast: AA pass (≥4.5:1) on all text, AA pass (≥3:1) on UI controls.
- `aria-label` on icon-only buttons (region picker globe, mobile menu toggle, search).
- Form labels visible; placeholder text never serves as the only label.
