import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
        permanent: true,
      },
      {
        source: "/api/sitemap.xml",
        destination: "/api/sitemap",
        permanent: true,
      },
      {
        source: "/api/sitemap.js",
        destination: "/api/sitemap",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
