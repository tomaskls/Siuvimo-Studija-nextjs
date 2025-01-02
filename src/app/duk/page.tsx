import React from 'react';

import FAQList from '../../components/faq/FAQList';
import { getFAQs } from '../../components/faq/faq';
import { getFAQs2 } from '../../components/faq/faq';
import styles from './duk.module.css'

export default async function FAQPage() {
  const faqs = await getFAQs();
  const faqs2 = await getFAQs2();
  
  return (
    <div className={styles.block}>
      <h1 className={styles.h1}>Drabužių Taisymo ir Pritaikymo Paslaugos - Dažniausi Klausimai</h1>
      <FAQList faqs={faqs} />
      <h2 className={styles.h1}>Drabužių Siuvimo Paslaugos - Dažniausi Klausimai</h2>
      <FAQList faqs={faqs2} />
    </div>
  );
}