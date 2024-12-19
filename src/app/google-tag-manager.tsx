'use client';
import React from 'react';
import Script from 'next/script';

export function GoogleTagManager() {
  return (
    <Script
      id="gtm-consent"
      strategy="afterInteractive"
    >
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
  );
}