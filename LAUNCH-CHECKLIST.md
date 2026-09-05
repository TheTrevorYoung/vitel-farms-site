# Vitel Farms launch checklist

The site is intentionally domain-neutral until the final domain and official email are purchased/activated.

## Infrastructure — complete
1. Dedicated public repository: `TheTrevorYoung/vitel-farms-site`.
2. Production source: repository root on `main`.
3. GitHub Pages: Tier 1 direct branch publishing from `main` / root.
4. Routine Make publishing dependency: none.
5. Custom deployment workflow: none required.

## Domain launch
1. Confirm/purchase the final domain.
2. Verify the owned domain in GitHub where supported.
3. Run `python tools/configure_launch.py YOURDOMAIN info@YOURDOMAIN`.
4. Commit the generated `CNAME`, `sitemap.xml`, canonical URLs, robots configuration and contact configuration.
5. Configure apex and `www` DNS for GitHub Pages and define one canonical hostname.
6. Verify certificate issuance and enforce HTTPS.
7. Test Home, Mission, Model, Cassava, Markets, About, Updates, Contact, Evidence, Privacy and 404 on desktop/mobile.
8. Submit the sitemap to search engines after the production domain resolves.

Do not add acreage, production, farmer-count, buyer, partner, certification or investment claims without the evidence standard being satisfied.
