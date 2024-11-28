import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Space } from "../components/Space";
import { SidebarMenu } from "../components/sideMenu/SideMenu"
import { Roboto } from "next/font/google"

const font = Roboto({
  variable: "--font-merri",
  style: "italic",
  weight: "400",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Neringos Siuvimo Studija",
  description: "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas",
  icons: './icons/scissors.svg',

  openGraph: {
    title: 'Neringos Siuvimo Studija', //  Sutampa su pagrindiniu title
    description: 'Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas', // Sutampa su pagrindiniu description
    url: 'https://www.neringos-siuvimo-studija.lt', // Pakeiskite į savo svetainės adresą
    siteName: 'Neringos Siuvimo Studija', // Pakeiskite į savo svetainės pavadinimą
    type: 'website',
    images: [
      {
        url: 'https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp', // Pakeiskite į savo paveikslėlio adresą
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
      <body className={font.className}>
        <Header />
        <SidebarMenu />
        <Space />
        <div className="mainContainer">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
