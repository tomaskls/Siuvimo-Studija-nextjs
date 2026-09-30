'use client';
import React from 'react';
import { useId, useState } from 'react';
import styles from '../../app/duk/duk.module.css';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Puslapyje yra du sąrašai su tais pačiais id, todėl reikia unikalaus prefikso
  const idPrefix = useId();

  return (
    <div className={styles.faqList}>
      {faqs.map((faq) => {
        const isOpen = activeId === faq.id;
        const answerId = `${idPrefix}-answer-${faq.id}`;
        return (
          <div key={faq.id} className={styles.faqItem}>
            <button
              type="button"
              onClick={() => setActiveId(isOpen ? null : faq.id)}
              className={`${styles.question} ${isOpen ? styles.active : ''}`}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              {faq.question}
              <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div id={answerId} className={`${styles.answer} ${isOpen ? styles.show : ''}`}>
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}