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
import JsonLd from '../components/JsonLd';
import { siuvimoPaslaugos, organizationSchema, localBusinessSchema } from "../../schemas/index";
import { faqSchema } from "../../schemas/faq";
import { priceListSchema } from "../../schemas/prices";

const font = Merriweather({
  variable: "--font-merri",
  style: "italic",
  weight: "400",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Neringos Siuvimo Studija | Drabužių taisymas ir siuvimas Šiauliuose",
  description: "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas",
  icons: './icons/scissors.svg',
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={siuvimoPaslaugos} />
        <JsonLd data={faqSchema} />
        <JsonLd data={priceListSchema} />
      </head>

      <body className={font.className}>
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
