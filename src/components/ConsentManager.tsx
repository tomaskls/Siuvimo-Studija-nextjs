'use client';
import React from 'react';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import styles from './ConsentManager.module.css';

export function ConsentManager() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const handleAcceptAnalytics = () => {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    localStorage.setItem('cookieConsent', 'analytics');
    setShowConsent(false);
  };

  const handleDecline = () => {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      <Script id="gtm-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
        `}
      </Script>

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