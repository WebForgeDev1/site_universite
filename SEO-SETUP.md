# Studom: indexing and brand-search launch

## Prepared in this repository

- Consistent public Studom branding, descriptive title and visible homepage copy.
- Canonical homepage: https://studom.app/
- WebSite JSON-LD identifying Studom and studom.app.
- Sitemap: Site/sitemap.xml, containing the homepage only.
- Robots: Site/robots.txt allows public pages and declares the sitemap; API routes are excluded.
- SVG favicon matching the existing mark.

Existing localStorage keys remain unchanged so saved notes and favorites remain accessible.

## Deploy

The current wrangler.jsonc serves ./Site as the asset root. Deploy through the existing Cloudflare production pipeline so the files become https://studom.app/robots.txt and https://studom.app/sitemap.xml. The repository also has a separate GitHub Pages workflow; a GitHub push alone does not establish that the Cloudflare deployment has completed.

After deployment, verify the homepage and sitemap return HTTP 200, the homepage canonical is https://studom.app/, and the visible name is Studom. Check that Googlebot is not challenged or blocked by Cloudflare security settings; use Search Console's live test rather than assuming public browser access proves Googlebot access.

## Google Search Console (site owner)

1. Open https://search.google.com/search-console/ using the Google account for the project.
2. If studom.app is already listed, select it. Otherwise choose Add property > Domain and enter studom.app.
3. Google supplies a DNS TXT record. Add that exact record in the domain's DNS dashboard; keep existing DNS records. Return to Google and verify. Do not invent a verification token or remove the record afterward.
4. Inspect https://studom.app/ and run Test live URL. Resolve any reported blocking or indexing errors, then Request indexing.
5. Under Sitemaps, submit https://studom.app/sitemap.xml.
6. Monitor Pages for indexing status. In Performance, filter to France and brand queries such as Studom and studom.app; follow impressions, clicks and average position. Average position is an aggregate, not a promise of a fixed placement for every searcher.

Indexing and ranking are separate. Sitemap submission, metadata and structured data do not guarantee indexing, a deadline or a top-five position. Once indexing is confirmed, expand with original, helpful city pages and legitimate student-community mentions.

## References

- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
