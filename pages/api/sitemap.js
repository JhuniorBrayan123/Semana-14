import { routes } from "../../data/routes";

// URL base (puedes cambiarla por tu dominio final en Render o Vercel)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://semana-14-r5u6.onrender.com";

async function buildSitemap() {
  // 1. Rutas estáticas
  let allRoutes = [...routes];

  // 2. Simulación de CMS/Base de datos (API externa)
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await res.json();
    
    // Generar rutas dinámicas para el blog a partir de la API
    const dynamicRoutes = posts.map(post => `/blog/${post.id}`);
    allRoutes = [...allRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Error fetching dynamic routes for sitemap:", error);
  }

  // 3. Obtener la fecha actual para el timestamp (en formato ISO)
  const currentDate = new Date().toISOString();

  // 4. Construir el XML
  const urls = allRoutes
    .map(
      (url) => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${currentDate}</lastmod>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export default async function handler(req, res) {
  res.status(200);
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  
  const sitemap = await buildSitemap();
  res.send(sitemap);
}
