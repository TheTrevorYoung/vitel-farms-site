#!/usr/bin/env python3
"""Finalize a domain-neutral Vitel Farms static build for production.

Usage:
    python tools/configure_launch.py vitelfarms.sl info@vitelfarms.sl

Safe to rerun: canonical/og:url tags, CNAME, sitemap, robots and contact config
are updated deterministically.
"""
from __future__ import annotations
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    "index.html", "mission.html", "model.html", "cassava.html", "markets.html",
    "about.html", "updates.html", "contact.html", "evidence.html", "privacy.html",
]


def normalize_domain(raw: str) -> tuple[str, str]:
    raw = raw.strip().rstrip("/")
    if not raw:
        raise ValueError("Domain is required")
    candidate = raw if "://" in raw else "https://" + raw
    parsed = urlparse(candidate)
    host = parsed.netloc or parsed.path
    if not host or "." not in host or any(c.isspace() for c in host):
        raise ValueError(f"Invalid domain: {raw}")
    host = host.lower()
    return host, f"https://{host}"


def page_url(base: str, filename: str) -> str:
    return base + "/" if filename == "index.html" else f"{base}/{filename}"


def upsert_head_tag(html: str, pattern: str, replacement: str) -> str:
    if re.search(pattern, html, flags=re.I):
        return re.sub(pattern, replacement, html, count=1, flags=re.I)
    return html.replace("</head>", replacement + "\n</head>", 1)


def configure_html(base: str) -> None:
    for filename in PAGES + ["404.html"]:
        path = ROOT / filename
        html = path.read_text(encoding="utf-8")
        url = base + "/404.html" if filename == "404.html" else page_url(base, filename)
        canonical = f'<link rel="canonical" href="{url}">'
        ogurl = f'<meta property="og:url" content="{url}">'
        html = upsert_head_tag(html, r'<link\s+rel=["\']canonical["\'][^>]*>', canonical)
        html = upsert_head_tag(html, r'<meta\s+property=["\']og:url["\'][^>]*>', ogurl)
        path.write_text(html, encoding="utf-8")


def configure_contact(email: str) -> None:
    if "@" not in email or email.startswith("@") or email.endswith("@"):
        raise ValueError(f"Invalid email: {email}")
    config = ROOT / "assets/js/config.js"
    config.write_text(
        "window.VITEL_CONFIG = {\n"
        f'  contactEmail: "{email}",\n'
        f'  contactLabel: "{email}"\n'
        "};\n",
        encoding="utf-8",
    )


def write_launch_files(host: str, base: str) -> None:
    (ROOT / "CNAME").write_text(host + "\n", encoding="utf-8")
    urls = [page_url(base, p) for p in PAGES]
    sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    sitemap += [f"  <url><loc>{u}</loc></url>" for u in urls]
    sitemap += ["</urlset>", ""]
    (ROOT / "sitemap.xml").write_text("\n".join(sitemap), encoding="utf-8")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {base}/sitemap.xml\n", encoding="utf-8")


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python tools/configure_launch.py DOMAIN EMAIL", file=sys.stderr)
        return 2
    try:
        host, base = normalize_domain(sys.argv[1])
        email = sys.argv[2].strip()
        configure_html(base)
        configure_contact(email)
        write_launch_files(host, base)
    except ValueError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 2
    print(f"Configured Vitel Farms for {base}")
    print(f"Official email: {email}")
    print("Generated/updated: CNAME, sitemap.xml, robots.txt, canonical URLs, og:url tags, contact config")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
