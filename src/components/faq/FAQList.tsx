'use client';
import React from 'react';
import { useState } from 'react';
import styles from '../../app/duk/duk.module.css';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq) => (
        <div key={faq.id} className={styles.faqItem}>
          <button
            onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
            className={`${styles.question} ${activeId === faq.id ? styles.active : ''}`}
          >
            {faq.question}
            <span>{activeId === faq.id ? '−' : '+'}</span>
          </button>
          <div className={`${styles.answer} ${activeId === faq.id ? styles.show : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}