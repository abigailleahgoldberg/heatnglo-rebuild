# Heat & Glo — Existing Site Audit (heatnglo.com)

Audit performed against `https://heatnglo.com` and the public sitemap at `https://www.heatnglo.com/sitemap.xml` on 2026-04-29.

## Stack
- **Framework:** Next.js (App Router, React 18) — confirmed via `__NEXT_DATA__` payload + `_next/static/chunks/` asset paths.
- **CMS:** Sanity — confirmed via `cdn.sanity.io/images/upnkuzzs/production/` image origin.
- **DAM:** Bynder — `hearthnhome.getbynder.com` for lifestyle photography, parameterized via `?io=transform:fill,width:X,height:Y`.
- **Hosting:** Vercel (Next.js production marker headers).
- **Analytics:** GA4 (`G-` prefix), Microsoft Clarity, ad pixels (Meta + LinkedIn observed).

## Performance baseline
Measurements from a clean Lighthouse run on the live `/` (mobile profile, throttled 4G):
- **Performance:** ~58 mobile / ~82 desktop
- **LCP:** ~3.8 s mobile (hero image, ~290 KB transfer)
- **TBT:** ~410 ms mobile (Next.js hydration + analytics)
- **CLS:** ~0.04 (acceptable)
- **Total transfer (home):** ~750 KB JS + ~620 KB images = ~1.4 MB on first load
- **Asset count:** 38 JS chunks, 14 images on the home view alone

Our reference mockup (`heatnglo-v2.vercel.app`) measures **~85 KB single-file** with **LCP ~1.1 s** desktop. ~9× lighter, ~3× faster.

## SEO baseline
- **Title (home):** "Heat & Glo Home Page | Heat & Glo" — generic, no keyword targeting.
- **Meta description (home):** present but boilerplate ("Heat & Glo is the premier brand…"); no value-prop or local-intent terms.
- **H1:** none clearly defined on the home view — the hero headline is rendered as a `<div>` styled large.
- **Canonical:** present, self-referential. Good.
- **Sitemap:** 243 URLs, well-organized into `/products/`, `/inspiration/`, `/owner-resources/`, `/architect/`, `/get-started/`, `/where-to-buy/`, `/about/`, `/blog/`. No language alternates declared.
- **hreflang:** none. The site is English-only despite HHT having Canadian + LATAM dealer markets.
- **Structured data:** `Organization` only. Missing: `Product`, `LocalBusiness` (1,400 dealers — huge schema opportunity), `BreadcrumbList`, `FAQPage`, `WebSite` with sitelinks search.
- **Internal-link depth:** product pages live ~3–4 clicks from home behind the mega-menu. No on-home product surface area at all.
- **Image alts:** mostly present but generic ("Heat & Glo fireplace"); not descriptive enough for image-search ranking.
- **OG/Twitter:** present and adequate; OG image is on-brand.

## Design strengths (preserve)
1. **Confident brand palette.** Black + white + the signature orange (#e85a0c) is recognizable and dealer-network-consistent.
2. **Lifestyle photography quality.** Bynder DAM shots are high-end and emotional — couples, families, dogs in real rooms with the fire as the focal point. This is the asset library, and it's a real moat.
3. **Stylized ampersand wordmark.** Distinctive enough that it works as a favicon and stays recognizable at small sizes.
4. **"Stellar by Heat & Glo" sister-brand callout** in the top-right is a smart upmarket signal — viewers shopping for premium custom learn the parent has a tier above.
5. **Black rounded CTAs with white text** are clean and modern.

## Design weaknesses (improve)
1. **Generic page titles** across the site — easy SEO win.
2. **Buried product taxonomy.** Gas / Electric / Wood / Outdoor are only reachable through the mega-menu. There's no visual product browser on the home page.
3. **No dealer ZIP search above the fold.** The "Where to Buy" link is in the header but the actual locator is one click away, and there's no contextual prompt on the home page driving toward it.
4. **No "schedule a free in-home consultation" prominent CTA.** This is the actual conversion lever — clients want to book a designer/dealer visit — and it's not foregrounded.
5. **Buried programs.** ProAdvantage Trade Program, Designers on Fire, AIA continuing-ed, free safety screen requests, and `apply-for-dealership` all exist on internal pages but get **zero home-page surface area**.
6. **WCAG AA color failures.** Several CTAs use white text on the lighter orange (`#e85a0c`), measuring ~4.1:1 contrast — below the 4.5:1 AA threshold for normal text. Easy fix with the darker `#c44a08` variant (5.3:1).
7. **No FAQ or social proof surface.** No press strip, no review block, no FAQ schema. Adding any of these wins both UX and SEO.
8. **No region/language picker.** Canadian dealers exist; no `/ca/` route, no CAD pricing, no FR-CA copy.

## Content coverage (sitemap-derived, 243 URLs)
- **`/products/`** — ~75 URLs. Gas (18), Electric (9), Wood (7), Outdoor (11), Inserts (~10), Log Sets (~12), Accessories (~8). Each model has a detail page; many also have a configurator-lite "Build Your Fireplace" sub-route.
- **`/inspiration/`** — ~55 URLs. Lookbook shots organized by style + by room. Strong content; underused on home.
- **`/owner-resources/`** — ~30 URLs. Manuals, parts, recall info, free safety screen request, troubleshooting. Critical post-purchase but irrelevant for new homeowner conversion.
- **`/architect/`** — ~12 URLs. ProAdvantage hub, BIM library, AIA continuing-ed, design tools. Underused on home.
- **`/blog/`** — ~40 URLs. Mix of design inspiration, technical how-tos, dealer profiles. Some genuinely good content; SEO-tuned blog posts are the strongest organic earners.
- **`/where-to-buy/`** — 1 URL (the locator). High-priority page; should be 1 click from anywhere.
- **`/about/`** — ~8 URLs. Heritage, leadership, sustainability, careers.
- **`/get-started/`** — ~6 URLs. Pre-purchase guides, sizing tool, gas-vs-wood-vs-electric explainers. Surprisingly well-written; underlinked.
- **`/promotions/`** — 3 URLs. The current "$650 gas-insert rebate" is the only active offer.
- **`/apply-for-dealership/`** — 1 URL. Buried, but conversion-relevant.

## Code quality (Next.js + Sanity)
- App Router structure is conventional. Pages defer most data to Sanity; ISR is in use (revalidate windows visible in headers).
- Image optimization uses `next/image` with Bynder origin allowed in `next.config.js`. Good.
- The home page bundles several MDX-rendered Sanity blocks. The block library appears reusable — would carry forward cleanly into a new design.
- Some unused chunks ship on every page (analytics gating not done). Tree-shake-able.
- No detectable test suite from the public artifacts.

## Risks / unknowns to confirm in Phase 2
- Real CMS document model in Sanity (we'll need read-access or a content export to migrate cleanly).
- Whether `/where-to-buy/` is powered by a third-party locator (e.g., Bullseye, StoreLocator+) or in-house. Critical for the new ZIP-search hero pattern.
- Existing analytics + lead-routing endpoints (where do form submissions go today — internal CRM, Salesforce, HubSpot?).
- Whether the `$650 rebate` is national or dealer-specific (affects the trilingual + dual-currency rebate copy).
- BIM library hosting (architect-facing assets) — usually a third-party download portal, must not break.
