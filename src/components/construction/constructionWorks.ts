import type { Work } from '../works/types';

// Konstravimo darbų nuotraukos puslapyje /konstravimas (rodomos šia tvarka – nuo brėžinio iki kirpimo).
// Kiek darbų rodoma iš karto – konstravimas/page.tsx initialCount.
// Miniatiūros apkerpamos iki 9:16 (photoRatio), visa nuotrauka matoma peržiūroje.

export const constructionWorks: Work[] = [
  {
    title: '✏️ Konstrukcijos brėžinys',
    images: [
      { src: '/imgGallery/2026/konstrukcijos-brezinys.webp', alt: 'Švarko konstrukcijos brėžinys ir eskizai', width: 582, height: 1046 },
    ],
  },
  {
    title: '✏️ Konstrukcija ant plėvelės',
    images: [
      { src: '/imgGallery/2026/konstrukcija-ant-pleveles.webp', alt: 'Drabužio konstrukcija, nubraižyta ant permatomos plėvelės', width: 900, height: 1600 },
    ],
  },
  {
    title: '✏️ Popieriniai lekalai',
    images: [
      // Kvadratinė nuotrauka: apkerpama taip, kad liktų matomas QR kodas ir logotipas
      { src: '/imgGallery/2026/lekalai-su-studijos-logotipu.webp', alt: 'Popieriniai drabužio lekalai', width: 900, height: 850, position: '71% 50%' },
    ],
  },
  {
    title: '✏️ Lekalai ant audinio',
    images: [
      { src: '/imgGallery/2026/lekalai-ant-oranzinio-audinio.webp', alt: 'Permatomi lekalai, išdėlioti ant oranžinio dryžuoto audinio', width: 900, height: 1600 },
    ],
  },
  {
    title: '✏️ Braižymas ant audinio',
    images: [
      { src: '/imgGallery/2026/braizymas-ant-pilko-audinio.webp', alt: 'Kreida nubraižytos drabužio detalės ant tamsiai pilko audinio', width: 900, height: 1600 },
    ],
  },
  {
    title: '✏️ Itališkos vilnos suknelės detalės',
    images: [
      { src: '/imgGallery/2026/lekalai-ant-audinio.webp', alt: 'Plytinės spalvos itališkos vilnos audinys su lekalų kontūrais', width: 900, height: 1601 },
    ],
  },
  {
    title: '✏️ Detalės kirpimui',
    images: [
      { src: '/imgGallery/2026/zalio-audinio-detales.webp', alt: 'Žalias audinys su pažymėtomis drabužio detalėmis ir užtrauktuku', width: 900, height: 1334 },
    ],
  },
  {
    title: '✏️ Tvido detalės',
    images: [
      { src: '/imgGallery/2026/tvido-audinio-detales.webp', alt: 'Šviesiai mėlynas tvido audinys su pažymėtomis detalėmis ir užtrauktuku', width: 900, height: 2010 },
    ],
  },
];
