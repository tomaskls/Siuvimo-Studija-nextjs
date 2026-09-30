import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.neringos-siuvimo-studija.lt';

// Naują puslapį pridėkite į šį sąrašą.
const pages = [
  '',
  '/drabuziu-taisymas',
  '/drabuziu-taisymo-kainos',
  '/siuvykla',
  '/flisiniai-dzemperiai',
  '/gallery',
  '/duk',
  '/kontaktai',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `${BASE_URL}${path}` }));
}
