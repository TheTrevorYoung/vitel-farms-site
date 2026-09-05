# Vitel Farms Sierra Leone — production launch candidate v1.3

Static, dependency-free website for Vitel Farms — Sierra Leone. This repository is the authoritative version-controlled source for the public website.

## Infrastructure standard
- Website tier: **Tier 1 — Direct-Publish Site**
- Repository: `TheTrevorYoung/vitel-farms-site`
- Production branch: `main`
- GitHub Pages source: `main` / repository root
- Routine publishing: direct GitHub update → `main` → native GitHub Pages branch build
- Routine Make dependency: **none**
- Custom deployment Action: **none required**

Routine low-risk edits may be committed directly to `main`. Material redesigns, structural changes, sensitive claims, risky integrations or multi-contributor work should use a feature branch and pull request.

## Current site
- 11 production HTML pages
- responsive desktop/mobile design
- primary content remains visible without JavaScript; JavaScript enhances navigation and inquiry behavior only
- evidence/methodology page with public baseline and market-source notes
- privacy page and custom 404
- one-command domain/email launch configurator
- no analytics, cookies, external fonts, frameworks or third-party form services
- no credentials, tokens, API keys or private source data belong in this repository

Temporary staging URL: `https://thetrevoryoung.github.io/vitel-farms-site/`

## Domain launch sequence
1. Confirm/purchase the final Vitel Farms domain after the domain/brand check in `DOMAIN-OPTIONS.md`.
2. Verify the owned domain in GitHub where supported.
3. Run: `python tools/configure_launch.py YOURDOMAIN info@YOURDOMAIN`
4. Commit the generated `CNAME`, sitemap, canonical URLs, robots configuration and contact configuration.
5. Point apex and `www` DNS to GitHub Pages as documented in the launch brief.
6. Verify certificate issuance, enforce HTTPS and define the canonical hostname.
7. Run final desktop/mobile, navigation, 404, metadata and contact-channel QA.

## Evidence guardrails
- No partner logos without an appropriate confirmed relationship.
- Historical land/network claims are omitted or explicitly marked as under verification.
- #22 is described as a Vitel calculation from the FAOSTAT 2024 comparable production series.
- National operating statistics are sourced to Statistics Sierra Leone / MAFS 2024 Annual Agricultural Survey.
- Buyer/processor names are identified as market leads, not Vitel partners.

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
