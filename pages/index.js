import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Pagina principal con contenido optimizado para SEO en Next.js."
        />
        <meta property="og:title" content="Home | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Aprende tecnicas de SEO y rendimiento web con Next.js."
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}
