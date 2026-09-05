# Vitel Farms Sierra Leone — production launch candidate v1.3

Static, dependency-free website prepared for Vitel Farms — Sierra Leone. This build is frozen for GitHub deployment ahead of the September 8, 2026 domain launch.

## Current state
- 11 production HTML pages
- responsive desktop/mobile design
- all primary content remains visible without JavaScript; JavaScript enhances navigation and inquiry behavior only
- mobile navigation and staging inquiry builder
- evidence/methodology page with public baseline and market-source notes
- privacy page and custom 404
- GitHub Pages deployment workflow included
- one-command launch configurator included
- no analytics, cookies, external fonts, frameworks or third-party form services

## Final launch sequence
1. Create a dedicated public GitHub repository, recommended name `vitel-farms-site`.
2. Commit this folder to the repository root on `main`.
3. In GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions** (one-time enablement).
4. Purchase the final domain after the domain/brand check in `DOMAIN-OPTIONS.md`.
5. Run: `python tools/configure_launch.py YOURDOMAIN info@YOURDOMAIN`
6. Commit the generated CNAME/sitemap/canonical/contact changes.
7. Point DNS to GitHub Pages, verify HTTPS and test all pages.

## Evidence guardrails
- No partner logos are included.
- Historical land/network claims are omitted or explicitly marked as under verification.
- #22 is described as a Vitel calculation from the FAOSTAT 2024 comparable production series.
- National operating statistics are sourced to Statistics Sierra Leone / MAFS 2024 Annual Agricultural Survey.
- Buyer/processor names are explicitly identified as market leads, not Vitel partners.

## Structure
- `index.html` — Home
- `mission.html` — From #22 to #1
- `model.html` — Nucleus + farmer network model
- `cassava.html` — Cassava baseline / production / processing
- `markets.html` — Buyers, processors and partnerships
- `about.html` — TSEAI → Vitel history
- `updates.html` — Build-in-public status feed
- `contact.html` — Farmer, buyer and partner inquiry builder
- `evidence.html` — Sources and methodology
- `privacy.html` — Privacy notice
- `404.html` — Not found page
