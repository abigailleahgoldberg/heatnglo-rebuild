# Heat & Glo — Visual Editing Census

Per Phase 4 §3a. One row per section + the editable-region treatment chosen.

| Section / file | Treatment | Notes |
|---|---|---|
| `TopUtilityStrip.astro` (global) | `data-file` (sidebar-only — not a block) | Global chrome. Phase 5 moves rebate/microcopy to `src/data/site.json`. Region picker stays code-driven from `src/lib/localeUrls.ts`. |
| `Header.astro` (global) | `data-file` (sidebar-only) | Nav arrays in `src/data/nav.json` — edited via CC sidebar, not Visual Editor. Logo URL editable via `src/data/site.json` in Phase 5. |
| `Footer.astro` (global) | `data-file` (sidebar-only) | Columns + social + legal in `src/data/footer.json` — sidebar-only. |
| `StickyCta.astro` (global) | `source` | CTA labels are template-locale-static. Editing happens via the same `src/data/site.json` keys in Phase 5. |
| `HeroBlock.astro` | `text` × 8 + `image` × 1 + `data-prop` everywhere | Eyebrow rating, heading + heading-em, lede, both CTAs, microcopy, ZIP labels, proximity text, background image — all editable via Visual Editor. |
| `TrustStripBlock.astro` | `array` + nested `text` × 4 inside each item | 4-row stat strip. Editors can reorder, add, remove items via VE. Each item's icon/num/num-unit/label inline-editable. |
| `LoveYourFireplaceBlock.astro` | `text` × 6 + `image` × 1 | Eyebrow, heading + em, two paragraphs, CTA label, media image. |
| `BrowseLineupBlock.astro` | `text` × 3 + `array` of card items + nested `text`/`image` per card | Header copy editable; cards array is fully reorderable + each card's image, title, sub, CTA label inline-editable. |
| `ProAdvantageBlock.astro` | same as LoveYourFireplaceBlock | Reverse media position, default `bg_variant: cream`. |
| `TVWallsBlock.astro` | `text` × 5 + `image` × 1 | Editorial CTA section. |
| `PressStripBlock.astro` | `text` × 1 + `array` of logos + nested `text` per logo | Lead text + logo array. Logos are text-styled spans (no images yet). |
| `FaqBlock.astro` | `text` × 3 + `array` of items + nested `text` × 2 per item (rich-text answer) | Each FAQ item Q + A inline-editable. Answer field is `data-type="block"` for richer copy. |
| `QuoteBlock.astro` | `text` × 3 (body + name + meta), `stars` count via sidebar | Attribution metadata inline-editable; star count is a number sidebar input. |
| `ContentBlocks.astro` (page-builder) | `array` (the page-builder loop) + `array-item` per block | Renders all 9 block types. Editors get full CRUD on `content_blocks` array via the modal Structure picker. |

## Treatment summary

- **Block-level inline editables (text + image + array):** all 9 block components.
- **`data-file` / sidebar-only:** the 4 global components (TopUtilityStrip, Header, Footer, StickyCta) — they're chrome, not page-builder content. CC sidebar editors point at `src/data/{site,nav,footer}.json` in Phase 5.
- **`source` regions:** none currently used. If hardcoded copy appears later (e.g., a static disclaimer that doesn't deserve a prop), `source` is the right treatment.
- **`component`:** N/A for Phase 4. Used in Phase 8 for slot-style nested components.

## Variant-prop coverage (Block Delivery Standard §7c)

Every block exposes the full variant set:

| Block | bg_variant | alignment | density | hidden_on_mobile | cta_*_variant |
|---|---|---|---|---|---|
| HeroBlock | ✅ | ✅ | ✅ | ✅ | `cta_primary_variant`, `cta_secondary_variant` |
| TrustStripBlock | ✅ | ✅ | ✅ | ✅ | n/a (no CTA) |
| LoveYourFireplaceBlock | ✅ | ✅ | ✅ | ✅ | `cta_variant` |
| BrowseLineupBlock | ✅ | ✅ | ✅ | ✅ | n/a (cards link, no CTA prop) |
| ProAdvantageBlock | ✅ | ✅ | ✅ | ✅ | `cta_variant` |
| TVWallsBlock | ✅ | ✅ | ✅ | ✅ | `cta_variant` |
| PressStripBlock | ✅ | ✅ | ✅ | ✅ | n/a |
| FaqBlock | ✅ | ✅ | ✅ | ✅ | n/a |
| QuoteBlock | ✅ | ✅ | ✅ | ✅ | n/a |

All 9 blocks compliant. Verification grep `grep -LE 'sectionClasses' src/components/blocks/*.astro` returns empty (every block uses the helper).

## Locale-agnostic audit (§7b)

`grep -rnE 'Astro\.url|Astro\.request|Astro\.currentLocale|Astro\.cookies|from .+/lib/locale' src/components/blocks` returns **zero hits**. Block components don't read request state. Localization happens up-tree in `ContentBlocks.astro` via `localizeBlockHrefs()`.
