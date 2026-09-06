# Vitel Farms Sierra Leone — production launch candidate v1.9

Static, dependency-free website for Vitel Farms — Sierra Leone. This repository is the authoritative version-controlled source for the public website.

## Brand hierarchy
- **Vitel Farms is the enduring company, farm and agribusiness platform.**
- **No single crop defines the company.**
- Crop strategies sit underneath Vitel Farms and are expanded only when land fit, market demand, operating capability and economics support them.
- **Cassava is an important current workstream with its own production, processing and long-horizon national ambitions.** It is not the primary identity of Vitel Farms.
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
- Vitel Farms is presented first as a long-term Sierra Leonean farm and agribusiness platform
- farm system centered on land → production → harvest → aggregation → value addition → market
- crop portfolio page separates company identity from individual crop workstreams
- cassava has a dedicated page for its baseline, production discipline, processing hypotheses and long-horizon national ambition
- future crops remain open but are not presented as active until a documented land, market, operating and economic case exists
- market-led decision rule: crop and production choices respond to real demand rather than speculative scale
- nucleus + verified producer-network operating model
- homepage includes current-state disclosure and the producer verification sequence: 25 records, then 50, then 100
- green/gold identity retained with restrained soil, clay and harvest tones
- branded 1200×630 social-preview card with Open Graph and Twitter large-card metadata
- current field photography remains proof-gated: no stock or unverified imagery is used as Vitel operations
- founder Trevor Young and Tseai Energy Unlimited (TEU) lineage presented explicitly and separately from current operating claims
- Sierra Leone’s 2024 cassava baseline is kept on the cassava/evidence pages rather than used as the company’s primary identity
- prospective buyer/company names are not published merely because they appear in public directories; public relationship language follows direct verification
- responsive desktop/mobile design
- primary content remains visible without JavaScript; JavaScript normalizes navigation/footer and enhances inquiry behavior
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
- National operating statistics are sourced to Statistics Sierra Leone / MAFS 2024 Annual Agricultural Survey.
- FAOSTAT is used for comparable international cassava ranking, not as a substitute for the national operating baseline.
- Prospective buyers/processors are not named publicly until direct verification supports doing so.
- Current field photography is published only after provenance and rights verification.
- Future crops are not presented as active Vitel programs until a documented business decision is made.

## Structure
- `index.html` — Home / Vitel Farms identity / farm system / crop portfolio / current state
- `about.html` — Our Story / Tseai Energy Unlimited → Vitel history
- `mission.html` — Farm Strategy / how Vitel grows and adds crops
- `model.html` — Nucleus + producer-network operating model
- `crops.html` — Crop portfolio architecture and expansion rules
- `cassava.html` — Cassava-specific workstream, baseline, processing and ambition
- `markets.html` — Market-validation logic and partnership architecture
- `updates.html` — Build-in-public status feed with dated completed/developing items
- `contact.html` — Farmer, buyer and partner inquiry builder
- `evidence.html` — Sources, cassava baseline reconciliation and methodology
- `privacy.html` — Privacy notice
- `404.html` — Not found page
- `ASSET-PROVENANCE.md` — public asset provenance register
- `assets/field/README.md` — verified current field-image intake protocol
