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
import { OrganizationSchema } from "@/types/schema";

const font = Merriweather({
  variable: "--font-merri",
  style: "italic",
  weight: "400",
  subsets: ['latin'],
});

const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neringos Siuvimo Studija",
  url: "https://www.neringos-siuvimo-studija.lt",
  logo: "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp",
  description: "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Aplikacijos ant drabužių. Vienetinių lekalų konstravimas",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+37060055316",
      contactType: "customer service",
      areaServed: "LT"
    }
  ],
  sameAs: [
    "https://www.facebook.com/neringossiuvimostudija",
    "https://www.instagram.com/neringossiuvimostudija",
    "https://www.instagram.com/neringossiuvimostudija"
  ]
};

export const metadata: Metadata = {
  title: "Neringos Siuvimo Studija",
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
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
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
