// Darbų pavyzdžių duomenys (sewing/sewingWorks.ts, repair/repairWorks.ts), rodomi su WorkExamples.
// images: 1 nuotrauka – siaura kortelė, 2 – plati, 3 ir daugiau – per visą eilutę.

export interface WorkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Kuri apkarpytos miniatiūros vieta lieka matoma (CSS object-position), pvz. '71% 50%'
  position?: string;
}

export interface Work {
  title: string;
  text?: string;
  // Sąrašas su paryškinta pradžia, pvz. { lead: 'Saulės motyvas:', text: 'reiškia…' }
  details?: { lead: string; text: string }[];
  images: WorkImage[];
}
