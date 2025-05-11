import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nustatykite kanoninį domeną
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Canonical-Host",
            value: "www.neringos-siuvimo-studija.lt",
          },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      // Esami jūsų nukreipimai
      {
        source: '/repair',
        destination: '/drabuziu-taisymas',
        permanent: true,
      },
      {
        source: '/sewing',
        destination: '/siuvykla',
        permanent: true,
      },
      {
        source: '/product',
        destination: '/flisiniai-dzemperiai',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/kontaktai',
        permanent: true,
      },
      {
        source: '/prices',
        destination: '/drabuziu-taisymo-kainos',
        permanent: true,
      },
      
      // HTTP -> HTTPS nukreipimas su www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "neringos-siuvimo-studija.lt",
          },
        ],
        destination: "https://www.neringos-siuvimo-studija.lt/:path*",
        permanent: true,
      },
      
      // HTTP -> HTTPS nukreipimas be www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "neringos-siuvimo-studija.lt",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.neringos-siuvimo-studija.lt/:path*",
        permanent: true,
      },
      
      // robots.txt tiesioginis nukreipimas
      {
        source: '/robots.txt',
        has: [
          {
            type: 'host',
            value: 'neringos-siuvimo-studija.lt',
          },
        ],
        destination: 'https://www.neringos-siuvimo-studija.lt/robots.txt',
        permanent: true,
      },
      
      // sitemap.xml tiesioginis nukreipimas
      {
        source: '/sitemap.xml',
        has: [
          {
            type: 'host',
            value: 'neringos-siuvimo-studija.lt',
          },
        ],
        destination: 'https://www.neringos-siuvimo-studija.lt/sitemap.xml',
        permanent: true,
      },
      
      // Sutvarkytas sitemap.xml/ -> sitemap.xml nukreipimas
      {
        source: '/sitemap.xml/',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;