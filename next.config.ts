import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nustatome, kad visi URL būtų tik HTTPS ir tik su www
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
      // ------- ESAMI NUKREIPIMAI -------
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
      
      // ------- NUKREIPIMŲ GRANDINĖS SPRENDIMAI -------
      
      // 1. http://www.neringos-siuvimo-studija.lt -> https://www.neringos-siuvimo-studija.lt (tiesioginis 308 -> 200)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.neringos-siuvimo-studija.lt",
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
      
      // 2. http://neringos-siuvimo-studija.lt -> https://www.neringos-siuvimo-studija.lt (tiesioginis, vietoj grandinės 308 -> 301 -> 200)
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
      
      // 3. https://neringos-siuvimo-studija.lt -> https://www.neringos-siuvimo-studija.lt (tiesioginis 301 -> 200)
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
      
      // ------- SPECIFINIŲ FAILŲ NUKREIPIMAI -------
      
      // robots.txt: https://neringos-siuvimo-studija.lt/robots.txt -> https://www.neringos-siuvimo-studija.lt/robots.txt (tiesioginis)
      {
        source: "/robots.txt",
        has: [
          {
            type: "host",
            value: "neringos-siuvimo-studija.lt",
          },
        ],
        destination: "https://www.neringos-siuvimo-studija.lt/robots.txt",
        permanent: true,
      },
      
      // http://www.neringos-siuvimo-studija.lt/robots.txt -> https://www.neringos-siuvimo-studija.lt/robots.txt (tiesioginis)
      {
        source: "/robots.txt",
        has: [
          {
            type: "host",
            value: "www.neringos-siuvimo-studija.lt",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.neringos-siuvimo-studija.lt/robots.txt",
        permanent: true,
      },
      
      // sitemap.xml: https://neringos-siuvimo-studija.lt/sitemap.xml -> https://www.neringos-siuvimo-studija.lt/sitemap.xml (tiesioginis)
      {
        source: "/sitemap.xml",
        has: [
          {
            type: "host",
            value: "neringos-siuvimo-studija.lt",
          },
        ],
        destination: "https://www.neringos-siuvimo-studija.lt/sitemap.xml",
        permanent: true,
      },
      
      // http://www.neringos-siuvimo-studija.lt/sitemap.xml -> https://www.neringos-siuvimo-studija.lt/sitemap.xml (tiesioginis)
      {
        source: "/sitemap.xml",
        has: [
          {
            type: "host",
            value: "www.neringos-siuvimo-studija.lt",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.neringos-siuvimo-studija.lt/sitemap.xml",
        permanent: true,
      },
      
      // sitemap.xml/ -> sitemap.xml (pataisome slash pabaigoje)
      {
        source: "/sitemap.xml/",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;