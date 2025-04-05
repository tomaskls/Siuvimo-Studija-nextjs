import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      
      // Nauji nukreipimai nukreipimų grandinėms išvengti
      
      // Tiesioginiai robots.txt nukreipimai
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
      {
        source: '/robots.txt',
        has: [
          {
            type: 'host',
            value: 'http://neringos-siuvimo-studija.lt',
          },
        ],
        destination: 'https://www.neringos-siuvimo-studija.lt/robots.txt',
        permanent: true,
      },
      {
        source: '/robots.txt',
        has: [
          {
            type: 'host',
            value: 'http://www.neringos-siuvimo-studija.lt',
          },
        ],
        destination: 'https://www.neringos-siuvimo-studija.lt/robots.txt',
        permanent: true,
      },
      
      // Tiesioginiai sitemap.xml nukreipimai
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
      {
        source: '/sitemap.xml/',
        destination: '/sitemap.xml',
        permanent: true,
      },
      
      // Tiesioginis pagrindinio domeno nukreipimas
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'neringos-siuvimo-studija.lt',
          },
        ],
        destination: 'https://www.neringos-siuvimo-studija.lt/:path*',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;