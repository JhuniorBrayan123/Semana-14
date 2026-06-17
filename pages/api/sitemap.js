import { routes } from "../../data/routes";

const BASE_URL = "https://mi-proyecto-seo-snowy.vercel.app";

export default async function handler(req, res) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
            .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
            .join("")}
  </urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.write(sitemap);
    res.end();
}
