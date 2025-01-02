import {
    OrganizationSchema,
    LocalBusinessSchema,
    ServiceSchema,
  } from "../src/types/schema";
  
  export const organizationSchema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neringos Siuvimo Studija",
    url: "https://www.neringos-siuvimo-studija.lt",
    logo: "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp",
    description:
      "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Aplikacijos ant drabužių. Vienetinių lekalų konstravimas",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+37060055316",
        contactType: "customer service",
        areaServed: "LT",
      },
    ],
    sameAs: [
      "https://www.facebook.com/neringossiuvimostudija",
      "https://www.instagram.com/neringossiuvimostudija",
      "https://www.pinterest.com/Neringossiuvimostudija",
    ],
  };
  
  export const localBusinessSchema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.neringos-siuvimo-studija.lt",
    name: "Neringos Siuvimo Studija",
    image:
      "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp",
    description:
      "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Aplikacijos ant drabužių",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vytauto g. 80",
      addressLocality: "Šiauliai",
      postalCode: "77154",
      addressCountry: "LT",
      addressRegion: "Šiaulių apskritis",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.92782411660252",
      longitude: "23.315946062172443",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    telephone: "+37061516141",
    email: "neringos.siuvimo.studija@gmail.com",
    url: "https://www.neringos-siuvimo-studija.lt",
    paymentAccepted: ["Cash", "BankTransfer"],
    currenciesAccepted: "EUR",
    mainEntityOfPage: "https://www.neringos-siuvimo-studija.lt",
    hasMap: "https://www.google.com/maps?q=55.92782411660252,23.315946062172443",
    isAccessibleForFree: true,
  };
  
  export const servicesSchema: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Siuvimo paslaugos",
    "serviceType": "Siuvimo paslaugos",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija"
    },
    "areaServed": "Šiauliai",
    "description": "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Aplikacijos ant drabužių. Vienetinių lekalų konstravimas",
    "mainEntityOfPage": "https://www.neringos-siuvimo-studija.lt",
    "url": "https://www.neringos-siuvimo-studija.lt"
  }