import React from 'react';

import FAQList from '../../components/faq/FAQList';
import { getFAQs } from '../../components/faq/faq';
import { getFAQs2 } from '../../components/faq/faq';
import styles from './duk.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Šilti flisiniai džemperiai",
  description: "Sušilkite stilingai su unikaliais, pagal užsakymą siuvamais flisiniais džemperiais Šiauliuose! Rinkitės ir pritaikykite dydį, spalvą ir detales!",
  openGraph: {
      title: 'Neringos Siuvimo Studija | DUK',
      description: 'Turite klausimų apie rūbų taisymą ar siuvimą? Mūsų DUK puslapyje rasite atsakymus apie drabužių korekcijas, užsakymų terminus ir kainas. Greita, aišku ir patogu!', 
      url: 'https://www.neringos-siuvimo-studija.lt/duk',
      siteName: 'Neringos Siuvimo Studija',
      type: 'website',
      images: [
          {
              url: 'https://www.neringos-siuvimo-studija.lt/Images/siltas_flisinis_dzemperis_900.webp', 
              width: 900,
              height: 1352,
          },
      ],
  },
  alternates: {
      canonical: 'https://www.neringos-siuvimo-studija.lt/duk',
  }
};

export default async function FAQPage() {
  const faqs = await getFAQs();
  const faqs2 = await getFAQs2();
  
  return (
    <div className={styles.block}>
      <h1 className={styles.h1}>Drabužių Taisymo Paslaugos - Dažniausi Klausimai</h1>
      <FAQList faqs={faqs} />
      <h2 className={styles.h1}>Drabužių Siuvimo Paslaugos - Dažniausi Klausimai</h2>
      <FAQList faqs={faqs2} />
    </div>
  );
}