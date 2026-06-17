import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Contacta con Mi Sitio Optimizado para aprender mas sobre SEO en Next.js."
        />
        <meta property="og:title" content="Contacto | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Comunicate para recibir informacion sobre optimizacion web."
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contacto</h1>
      <p>Escribenos para conocer mas sobre optimizacion web.</p>
    </>
  );
}
