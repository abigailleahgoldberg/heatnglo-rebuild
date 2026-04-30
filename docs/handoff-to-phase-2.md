# Heat & Glo — Phase 1 → Phase 2 Handoff

This document locks every Phase 2 decision so build can begin without re-litigating Phase 0 or Phase 1 choices. If a Phase 2 decision needs to deviate from anything below, it routes back to Cash for explicit re-approval first.

## Locked decisions

### 1. Paradigm
- **Paradigm:** match-and-elevate
- **Brand-inheritance:** N/A — Heat & Glo is a standalone brand, no parent design system being inherited at the site level (HHT branding lives on the corporate site, not the consumer site)
- **Tier classification (Phase 0 §CRO Risk Tier):** Tier 1 (manufacturer-branded consumer site selling through dealers) — the redesign should err toward conservative; the brand has 50 years of equity and a dealer network that expects continuity

### 2. Visual system
- **Locked from `docs/brand.md`** in full
- **Palette:** black + white + brand orange (#e85a0c decorative / #c44a08 AA-compliant CTA)
- **Type:** DM Sans (headings) + Roboto (body); banned defaults Fraunces / Cormorant / Lora
- **Logo:** Sanity-hosted SVG ampersand wordmark — preserve

### 3. Page structure
- **Locked from `docs/new-sitemap.md`**
- **Home section order:** Hero → Trust strip → Love Your Fireplace Again → Browse the Lineup (4-card) → ProAdvantage → Six TV Wall Designs → FAQ → Press strip → Quote → Footer
- **Mobile + desktop sticky CTA** (Find a Dealer + Phone)
- **Region/language picker** in the top utility strip + repeated in footer

### 4. Content scope
- **243 URLs from existing sitemap** dispositioned per `docs/migration-ledger.md`
- **301 redirects** per `docs/redirect-map.md`
- **New page additions:** `/products/compare/`, `/get-started/budget-calculator/`, `/about/newsroom/`, faceted blog browsing
- **Renames:** `/architect/*` → `/pro/*`, `/privacy-policy/` → `/privacy/`, `/terms-of-use/` → `/terms/`
- **Locale routes:** `/` (en-US default) + `/es/` + `/ca/` + `/ca/fr/`

### 5. Internationalization
- **Locales:** en-US (default, no prefix) + es-US + en-CA + fr-CA — exactly four
- **Currency:** USD on en-US + es-US, CAD on en-CA + fr-CA, with picker override
- **hreflang:** five tags per page (en-US, es-US, en-CA, fr-CA, x-default)
- **Translation source:** professional human translation for top 50 pages at minimum; machine translation acceptable as scaffolding for remaining pages with human review pass before launch
- **Excluded locales:** es-MX (no dealer network), fr-FR (Parisian conventions wrong for Quebec), pt-BR (no market presence)

### 6. CMS
- **Decision:** **CloudCannon** (agency stack standard).
- **Migration approach (locked 2026-04-29 by David):** crawl + extract + improve. We do NOT request Sanity access from HHT. For each KEEP-disposition URL in the existing sitemap, Phase 5 fetches the live page, parses H1/title/meta/body copy, downloads creatives (currently on Bynder), uploads them to **Cloudinary DAM**, and writes a fresh CloudCannon collection entry that reads better than the source page (tighter copy, CRO-tightened CTAs, per-page schema).
- **Why crawl-and-improve, not 1:1 import:** the rebuild's value is the upgrade, not the parity. Importing Sanity 1:1 reproduces the existing site's CRO + SEO weaknesses; crawling and rewriting per-page is what makes the rebuild "obviously stronger than what they ship today" (Phase 1 brief §Goals).

### 7. Hosting
- **Decision:** Vercel (current vendor) — same logic as CMS
- **Custom domain:** `heatnglo.com` + the canonical redirects already in place stay
- **Preview:** `heatnglo-v2.vercel.app` (current Phase 0 mockup) graduates to a `staging.heatnglo.com` once Phase 2 picks up

### 8. Analytics + lead routing
- **Open question routed to Cash + Heat & Glo:** where do form submissions currently land? GA4 + Microsoft Clarity are confirmed live; the lead-capture endpoint behind `/contact/`, `/where-to-buy/?zip=...`, `/apply-for-dealership/` is unknown to us. **Phase 2 cannot launch without confirmation** — assume Salesforce or HubSpot until told otherwise; treat the answer as a blocking question for the kickoff call.

### 9. Dealer locator
- **Open question:** the existing `/where-to-buy/` is almost certainly powered by a third-party (Bullseye Locations, StoreLocator+, or similar). The new design preserves the existing search backend — we only redress the UI. Phase 2 confirms which vendor; the contract presumably stays.

### 10. BIM library + AIA continuing-ed
- **Decision:** preserve existing third-party hosting (typically Lasso BIM or similar) — we only update the consumer-facing landing pages, not the asset host

### 11. Performance budget
- **Targets:**
  - Home LCP ≤ 1.5s desktop / ≤ 2.5s mobile (4G throttled)
  - Total page weight ≤ 200 KB JS + ≤ 600 KB images on first paint
  - Lighthouse Performance ≥ 92 desktop / ≥ 80 mobile
- **Reference:** the Phase 0 mockup hits ~85 KB total — production will be heavier (real CMS, analytics, third-party locator embed) but should stay well under the current 750 KB

### 12. Accessibility
- **Standard:** WCAG 2.2 AA across the entire site
- **Manual test:** keyboard-only navigation pass on top 20 templates before launch
- **Automated test:** axe-core + Lighthouse Accessibility ≥ 95 on every template

### 13. SEO baseline (per `agency-templates/mockup-bridge-prompts/phase-0-mockup.md` §Phase 0 baseline)
- 13 canonical meta tags on every page (title, description, canonical, og:title/description/image/url/type, twitter:card/title/description/image, robots, viewport)
- Schema graph with at minimum: Organization, WebSite, BreadcrumbList, Product (PDPs), LocalBusiness (dealer locator), FAQPage (home + relevant pages), Article (blog), VideoObject (where applicable)
- Sitemap with hreflang
- robots.txt allow-all + sitemap reference

### 14. Approval artifacts
- **Mockup approved:** `https://heatnglo-v2.vercel.app` — match-and-elevate direction
- **Approver:** Cash / The Voice of Cash
- **Approval date:** 2026-04-29
- **Rejected directions:** "Bold" (Corporate Authority slate-gray) and "Editorial" (Source Serif 4 magazine layout) — both deleted from Vercel
- **Approved commit SHA:** TBD — set when initial repo push lands; tagged as `mockup-approved`

## Open questions for the kickoff call (blocking — must resolve before Phase 5 content lands)

1. **Lead-capture endpoint** — Salesforce, HubSpot, custom? (See §8.)
2. **Dealer-locator vendor** — Bullseye, StoreLocator+, in-house? (See §9.)
3. **Promo / rebate eligibility per locale** — the `$650 gas-insert rebate` — is it valid for all four locales (US-EN, US-ES, CA-EN, CA-FR) at the same dollar/CAD value, or does CAD have a different rebate amount? Affects translated copy.
4. **Existing analytics permissions** — GA4 property + Microsoft Clarity workspace access for the new domain.
5. **Stellar by Heat & Glo callout** — the sister-brand link in top-right — does it stay (current behavior) or move to a dedicated `/stellar` landing page on the new site?

**Resolved (locked decisions, no longer kickoff-blocking):**
- ~~Sanity studio access~~ — not requested. Migration is crawl-and-improve per §6.
- ~~Bynder DAM read access~~ — not required. Phase 5 downloads creatives during the crawl and uploads to our Cloudinary DAM.

## Non-questions (do not re-open)
- Paradigm choice (match-and-elevate, locked)
- Locale matrix (4 locales, locked)
- Color palette + typography (locked)
- Section order on home (locked)
- CMS choice (Sanity, locked unless blocker surfaces)
- Hosting (Vercel, locked)

## Phase 2 deliverables (preview)
1. Repo: `heatnglo-rebuild` under `abigailleahgoldberg`
2. Vercel project: `heatnglo-rebuild` linked to repo
3. Initial commit tagged `mockup-approved` referencing the v2 mockup
4. Sanity schema mirroring existing model + locale extensions
5. ~25 page templates (home, products hub, PDP, inspiration hub, locator, ProAdvantage, owner-resources hub, blog hub + post, contact, legal x3, etc.)
6. ~932 routes total (233 per locale × 4 locales)
7. Performance + accessibility + SEO test passes against the budget in §11–13
8. Staging at `staging.heatnglo.com` for client review
9. Launch-day redirect-map verification + sitemap submission

End of Phase 1 handoff.
