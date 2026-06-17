import { routes } from "../../data/routes";

const BASE_URL = "https://mi-proyecto-seo-snowy.vercel.app";

function buildSitemap() {
  const urls = routes
    .map(
      (url) => `  <url>
    <loc>${BASE_URL}${url}</loc>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export default function handler(req, res) {
  res.status(200);
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.send(buildSitemap());
}
