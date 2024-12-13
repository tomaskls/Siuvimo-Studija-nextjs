import Pictures from '../../components/gallery/Gallery';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Neringos Siuvimo Studijos Galerija",
  description: "Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!",
  openGraph: {
    title: 'Neringos Siuvimo Studijos Galerija',
    description: 'Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!', 
    url: 'https://www.neringos-siuvimo-studija.lt/gallery',
    siteName: 'Neringos Siuvimo Studija',
    type: 'website',
    images: [
      {
        url: 'https://www.neringos-siuvimo-studija.lt/imgGallery/medvilninis_laisvalaikio_bliuzonas.webp', 
        width: 900,
        height: 1200,
      },
    ],
  },
  alternates: {
    canonical: 'https://www.neringos-siuvimo-studija.lt/gallery',
  }
};
export default function Gallery() {
  return (
    <Pictures />
  )
}