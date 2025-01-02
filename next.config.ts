import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* CSS optimizacijos nustatymai */
  experimental: {
    optimizeCss: true
  },
  
  /* Esami redirects nustatymai */
  async redirects() {
    return [
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
    ]
  },
};

export default nextConfig;