import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Articulos sobre SEO, rendimiento web y buenas practicas con Next.js."
        />
        <meta property="og:title" content="Blog | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Lee publicaciones para mejorar el posicionamiento de tu web."
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Blog</h1>
      <p>Articulos sobre SEO y rendimiento en Next.js.</p>
    </>
  );
}
