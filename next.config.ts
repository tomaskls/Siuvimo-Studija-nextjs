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

      // Visi adresai be www (įskaitant robots.txt ir sitemap.xml) nukreipiami į www versiją
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
