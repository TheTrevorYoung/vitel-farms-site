# Vitel Farms Sierra Leone — production launch candidate v1.8

Static, dependency-free website for Vitel Farms — Sierra Leone. This repository is the authoritative version-controlled source for the public website.

## Brand hierarchy
- **Vitel Farms is the enduring company and agribusiness platform.**
- **Cassava is the current flagship operating mission, not the permanent boundary of the company.**
- Current mission: build measurable gains in Sierra Leonean cassava production, farmer coordination, markets and value addition; world leadership remains a long-horizon national ambition.
- Future crop or value-chain expansion should occur only after the cassava platform reaches defined proof gates and a new opportunity has a separate market, technical and economic case.
- Durable brand line: **Growing more value from Sierra Leonean agriculture.**

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
- market-led cassava direction centered on land → production → aggregation → value addition → market
- green/gold identity retained and extended with restrained soil, clay and harvest tones
- branded 1200×630 social-preview card with Open Graph and Twitter large-card metadata across public pages
- current field photography remains proof-gated: no stock or unverified imagery is used as Vitel operations
- public field-image intake structure at `assets/field/README.md`, with date, location, source, rights, consent and context verification required before publication
- founder Trevor Young and Tseai Energy Unlimited (TEU) lineage presented explicitly and separately from current operating claims
- homepage includes a concise current-state block and the farmer verification sequence: 25 records, then 50, then 100
- cassava is presented as the current flagship mission inside the broader Vitel Farms brand
- Sierra Leone’s 2024 cassava baseline is shown at about 2.86 million tonnes and around #21 globally; #1 is presented only as a long-horizon national ambition
- the 2024 national baseline explicitly separates 262,326 ha planted from 242,380 ha harvested; the reported 11.8 t/ha yield is treated on the harvested-area basis
- prospective buyer/company names are not published merely because they appear in public directories; public relationship language follows direct verification
- responsive desktop/mobile design
- primary content remains visible without JavaScript; JavaScript enhances navigation and inquiry behavior only
- evidence/methodology page with reconciled national-survey and FAOSTAT source roles
- privacy page and custom 404 use the same navigation, footer and social metadata standard
- no analytics, cookies, external fonts, frameworks or third-party form services
- no credentials, tokens, API keys or private source data belong in this repository

Current public URL: `https://thetrevoryoung.github.io/vitel-farms-site/`

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
- Sierra Leone’s current international cassava position is described as around #21 using the FAOSTAT 2024 comparable production series; the site keeps the ranking qualified because revisions and ranking methods can produce small differences.
- National operating statistics are sourced to Statistics Sierra Leone / MAFS 2024 Annual Agricultural Survey.
- The national survey and FAOSTAT are assigned separate roles: national operating baseline vs. international comparison.
- Prospective buyers/processors are not named publicly until direct verification supports doing so.
- Current field photography is published only after provenance and rights verification.
- Future crops are not presented as active Vitel programs until a documented business decision is made.

## Structure
- `index.html` — Home / Vitel identity / current state / farmer verification milestones
- `about.html` — Our Story / Tseai Energy Unlimited → Vitel history
- `mission.html` — Current Cassava Mission / measurable gains and long-horizon national ambition
- `model.html` — Nucleus + producer-network operating model
- `cassava.html` — Current flagship crop baseline / production / processing
- `markets.html` — Market-validation logic and partnership architecture
- `updates.html` — Build-in-public status feed with dated completed/developing items
- `contact.html` — Farmer, buyer and partner inquiry builder
- `evidence.html` — Sources, baseline reconciliation and methodology
- `privacy.html` — Privacy notice
- `404.html` — Not found page
- `ASSET-PROVENANCE.md` — public asset provenance register
- `assets/field/README.md` — verified current field-image intake protocol
