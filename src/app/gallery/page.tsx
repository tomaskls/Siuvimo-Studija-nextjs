import Pictures from '../../components/gallery/Gallery';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Neringos Siuvimo Studijos Galerija",
  description: "Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!",
  openGraph: {
      title: 'Neringos Siuvimo Studijos Galerija', //  Sutampa su pagrindiniu title
      description: 'Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!', // Sutampa su pagrindiniu description
      url: 'https://www.neringos-siuvimo-studija.lt/gallery', // Pakeiskite į savo svetainės adresą
      siteName: 'Neringos Siuvimo Studija', // Pakeiskite į savo svetainės pavadinimą
      type: 'website',
      images: [
          {
              url: 'https://www.neringos-siuvimo-studija.lt/imgGallery/medvilninis_laisvalaikio_bliuzonas.webp', // Pakeiskite į savo paveikslėlio adresą
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