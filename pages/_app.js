import { Inter } from "next/font/google";
import Link from "next/link";
import "../styles/globals.css"; // Ensure global styles are loaded if they exist

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <nav style={{ padding: '20px', background: '#333', color: 'white', display: 'flex', gap: '15px' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        <Link href="/contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
