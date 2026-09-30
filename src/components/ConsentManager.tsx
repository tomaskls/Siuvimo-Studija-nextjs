'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './ConsentManager.module.css';
import {
  CONSENT_STORAGE_KEY,
  OPEN_CONSENT_EVENT,
  ConsentChoice,
  getConsentState,
} from './consent';

// Numatytąjį sutikimą nustato consentDefaultsScript (layout.tsx <head>),
// šis komponentas tik rodo banerį ir atnaujina pasirinkimą.
export function ConsentManager() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    let hasConsent: string | null = null;
    try {
      hasConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {}
    if (!hasConsent) {
      setShowConsent(true);
    }

    const openSettings = () => {
      setShowDetails(false);
      setShowConsent(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openSettings);
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    window.gtag?.('consent', 'update', getConsentState(choice));
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {}
    setShowConsent(false);
  };

  const handleAcceptAll = () => saveChoice('all');
  const handleAcceptAnalytics = () => saveChoice('analytics');
  const handleDecline = () => saveChoice('declined');

  if (!showConsent) return null;

  return (
    <>
      <div className={styles.consentContainer}>
        <div className={styles.consentContent}>
          {!showDetails ? (
            <>
              <p className={styles.text}>
                Mes naudojame slapukus svetainės analitikai ir reklamai. 
                Jūs galite pasirinkti su kuriais slapukais sutinkate.
              </p>
              <div className={styles.buttonsContainer}>
                <button
                  onClick={() => setShowDetails(true)}
                  className={`${styles.button} ${styles.infoButton}`}
                >
                  Daugiau informacijos
                </button>
                <button
                  onClick={handleDecline}
                  className={`${styles.button} ${styles.declineButton}`}
                >
                  Atmesti visus
                </button>
                <button
                  onClick={handleAcceptAnalytics}
                  className={`${styles.button} ${styles.analyticsButton}`}
                >
                  Tik analitika
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={`${styles.button} ${styles.acceptButton}`}
                >
                  Sutinku su visais
                </button>
              </div>
            </>
          ) : (
            <div className={styles.detailsContainer}>
              <h2 className={styles.detailsTitle}>Apie slapukus</h2>
              <div className={styles.detailsContent}>
                <div className={styles.detailsSection}>
                  <h3 className={styles.detailsSectionTitle}>Būtinieji slapukai</h3>
                  <p className={styles.detailsSectionText}>
                    Šie slapukai yra būtini svetainės veikimui ir negali būti išjungti.
                  </p>
                </div>
                <div className={styles.detailsSection}>
                  <h3 className={styles.detailsSectionTitle}>Analitiniai slapukai</h3>
                  <p className={styles.detailsSectionText}>
                    Padeda mums suprasti, kaip lankytojai naudojasi svetaine. 
                    Naudojame Google Analytics.
                  </p>
                </div>
                <div className={styles.detailsSection}>
                  <h3 className={styles.detailsSectionTitle}>Reklaminiai slapukai</h3>
                  <p className={styles.detailsSectionText}>
                    Naudojami rodyti jums pritaikytą reklamą. 
                    Šie slapukai seka jūsų naršymą skirtingose svetainėse.
                  </p>
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  onClick={() => setShowDetails(false)}
                  className={`${styles.button} ${styles.infoButton}`}
                >
                  Grįžti
                </button>
                <button
                  onClick={handleDecline}
                  className={`${styles.button} ${styles.declineButton}`}
                >
                  Atmesti visus
                </button>
                <button
                  onClick={handleAcceptAnalytics}
                  className={`${styles.button} ${styles.analyticsButton}`}
                >
                  Tik analitika
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={`${styles.button} ${styles.acceptButton}`}
                >
                  Sutinku su visais
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}