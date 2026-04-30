# CloudCannon — Heat & Glo

Phase 6 populates this with editor onboarding (collection schemas, Visual Editor walkthrough, where-to-edit-what reference). Phase 2 ships an empty stub so the directory exists in git.

`initial-site-settings.json` is locked at `output_path: dist/client` (NOT `dist`) — Astro's Vercel adapter relocates the static build there, and CC's preview iframe expects to find the rendered HTML at that path.
