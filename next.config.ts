import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* kiti esami nustatymai */
  async redirects() {
    return [
      {
        source: '/repair',
        destination: '/drabuziu-taisymas',
        permanent: true,
      },
      // čia galite pridėti daugiau nukreipimų
    ]
  },
};

export default nextConfig;