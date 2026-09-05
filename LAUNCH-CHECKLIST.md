# Vitel Farms launch checklist

The site is intentionally domain-neutral until the final domain and official email are purchased/activated.

1. Create a dedicated public GitHub repository (recommended name: `vitel-farms-site`).
2. Commit the contents of this folder to the repository root on `main`.
3. In GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions** (one-time enablement).
4. Run `python tools/configure_launch.py YOURDOMAIN info@YOURDOMAIN`.
5. Commit the generated `CNAME`, `sitemap.xml`, canonical URLs, robots.txt and contact configuration.
6. Point the domain DNS records to GitHub Pages and verify HTTPS.
7. Test Home, Mission, Model, Cassava, Markets, About, Updates, Contact, Evidence, Privacy and 404 on desktop/mobile.
8. Submit the sitemap to search engines after the production domain resolves.

Do not add acreage, production, farmer-count, buyer, partner, certification or investment claims without the evidence standard being satisfied.
