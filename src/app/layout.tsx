import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Space } from "../components/Space";
import { SidebarMenu } from "../components/sideMenu/SideMenu";
import { Merriweather } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { ConsentManager } from "../components/ConsentManager";
import { consentDefaultsScript } from "../components/consent";
import JsonLd from '../components/JsonLd';
import { siuvimoPaslaugos, organizationSchema, localBusinessSchema } from "../../schemas/index";

// Tekstas – normalus stilius, antraštės – kursyvas (globals.css, --font-heading).
// Du fiksuoto storio šriftai vietoj kintamo: ~190 KB vietoj ~350 KB.
// latin-ext: lietuviškos raidės (ą, č, ę, ė, į, š, ų, ū, ž)
const font = Merriweather({
  weight: "400",
  style: "normal",
  subsets: ['latin', 'latin-ext'],
});

const headingFont = Merriweather({
  variable: "--font-heading",
  weight: "700",
  style: "italic",
  subsets: ['latin', 'latin-ext'],
});


export const metadata: Metadata = {
  title: "Neringos Siuvimo Studija | Drabužių taisymas ir siuvimas Šiauliuose",
  description: "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas",
  metadataBase: new URL('https://www.neringos-siuvimo-studija.lt'),
  icons: '/icons/scissors.svg',
  openGraph: {
    title: 'Neringos Siuvimo Studija',
    description: 'Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas',
    url: 'https://www.neringos-siuvimo-studija.lt',
    siteName: 'Neringos Siuvimo Studija',
    type: 'website',
    images: [
      {
        url: 'https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp',
        width: 900,
        height: 1600,
      },
    ],
  },
  alternates: {
    canonical: 'https://www.neringos-siuvimo-studija.lt',
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <head>
        {/* Turi būti vykdomas prieš Google Analytics, kad sekimas nepradėtų veikti be sutikimo */}
        <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={siuvimoPaslaugos} />
      </head>

      <body className={`${font.className} ${headingFont.variable}`}>
        <GoogleAnalytics gaId="G-1HRYBXDSTR" />
        <Header />
        <SidebarMenu />
        <Space />
        <div className="mainContainer">
          {children}
          <Footer />
        </div>
        <ConsentManager />
      </body>
    </html>
  );
}
