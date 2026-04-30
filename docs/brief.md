# Heat & Glo — Client Brief

## Client identity
- **Brand:** Heat & Glo
- **Parent:** Hearth & Home Technologies (HHT)
- **Sister brand:** Stellar by Heat & Glo (premium custom)
- **Headquarters:** Lake City, Minnesota — 20802 Kensington Blvd · 55041
- **Founded:** 1975
- **Phone:** 888-427-3973
- **Site:** https://heatnglo.com (Next.js, Sanity CMS)

## What they sell
Manufactured residential fireplaces, fire features, and inserts — sold through ~1,400 authorized dealers (US + Canada). Not direct-to-consumer.

**Product taxonomy (243 URLs in current sitemap):**
- Gas fireplaces (18 models): direct-vent, B-vent, ventless · linear + traditional · indoor + outdoor + freestanding · gas log set collections (indoor + outdoor)
- Electric fireplaces (9 models): wall-mount, built-in, inserts, outdoor
- Wood fireplaces (7 models): EPA-certified, low-emission burns
- Outdoor fireplaces (11 models): patio, built-in, fire pits, gas + wood
- Flagship lines specified by name in trade: **Cosmo · Mezzo · True · SupremeX · Inception · Allusion · Triton**

## Audiences
1. **Homeowners** — browsing for a fireplace upgrade or new install. The "Save up to $650 on a gas insert" rebate is the primary current acquisition lever.
2. **Builders / designers / architects / HVAC contractors** — accessed via the **ProAdvantage Trade Program** (BIM library, AIA continuing-ed credits, wholesale pricing).
3. **Existing owners** — seeking parts, recall info, safety screen requests, manuals.
4. **Dealer applicants** — `/apply-for-dealership`.

## Goals (this rebuild)
1. **Foot in the door for an enterprise contract.** Not a clean-slate brand reinvention. Match-and-elevate the current visual language; add tech + CRO improvements that are obviously stronger than what they ship today.
2. **Schedule consultations** — make the dealer-locator + free-in-home-consultation flow the primary conversion path (Budget Blinds-style distributor pattern).
3. **Surface the existing-but-buried programs** — Designers on Fire, Continuing Education, Free Safety Screen request, Apply-for-Dealership. All exist at /architect and /fireplace-safety etc. but get no home-page surface area.
4. **Multi-region:** USD + CAD, English + Spanish (US) + French (CA). All four combos accessible from a region picker.

## What's prominent in the current visual identity (must preserve)
- Black + white + Heat & Glo orange (#e85a0c) palette
- Black rounded CTAs with white text
- Orange rule under section headlines (decorative line)
- Lifestyle photography (real-room shots from the in-house Bynder DAM at `hearthnhome.getbynder.com`)
- Stylized ampersand wordmark in the logo
- "Stellar by Heat & Glo" partner reference top-right (sister-brand callout)

## What's flagged for explicit improvement
- Generic title: "Heat & Glo Home Page | Heat & Glo" → keyword-rich page-specific titles
- Buried product taxonomy (mega-menu only) → 4-card browse-by-type on home + browse-by-room
- No dealer ZIP search above the fold → glassmorphic ZIP picker in hero
- Missing structured-data depth (only `Organization`) → 10-entity schema graph
- ~750 KB Next.js home → ~85 KB single-file mockup (~9× lighter)
- White-on-orange CTA text (~4.1:1) below WCAG AA → all CTAs flipped to white-on-#c44a08 (5.3:1, AA pass)

## Approval status (Phase 0 → Phase 1 gate)
- **Mockup URL:** https://heatnglo-v2.vercel.app
- **Approving party:** Cash / The Voice of Cash · 2026-04-29
- **Approved direction:** match-and-elevate (white + black + orange; mirror current section structure: Hero · Love Your Fireplace Again · ProAdvantage · Six TV Wall Designs · Footer; add 4-card product browse + heritage strip + ZIP locator + FAQ + press strip + desktop sticky CTA + region picker)
- **Rejected directions:** "Bold" (Corporate Authority slate-gray + slab-serif) and "Editorial" (Source Serif 4 magazine layout) — both deleted from Vercel after Cash chose the brand-faithful direction.
- **Approved commit SHA:** TBD on first repo push (will be tagged `mockup-approved`).
