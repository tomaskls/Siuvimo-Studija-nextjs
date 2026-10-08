import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.neringos-siuvimo-studija.lt';

// Naują puslapį pridėkite į šį sąrašą.
// lastModified: data, kada paskutinį kartą pasikeitė puslapio TURINYS (tekstas, kainos,
// nuotraukos). Ją atnaujinkite rankiniu būdu, kai keičiate turinį. Neįrašykite
// build'o datos visiems puslapiams: tada Google pradeda tokias datas ignoruoti.
const pages: { path: string; lastModified: string }[] = [
  { path: '', lastModified: '2026-10-08' },
  { path: '/drabuziu-taisymas', lastModified: '2026-09-30' },
  { path: '/drabuziu-taisymo-kainos', lastModified: '2026-10-08' },
  { path: '/siuvykla', lastModified: '2026-09-30' },
  { path: '/gallery', lastModified: '2026-09-30' },
  { path: '/duk', lastModified: '2026-10-08' },
  { path: '/kontaktai', lastModified: '2026-10-08' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: page.lastModified,
  }));
}
