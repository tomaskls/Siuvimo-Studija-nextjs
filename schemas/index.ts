import {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  IndividualServiceSchema
} from "../src/types/schema";

const baseAddress = {
  "@type": "PostalAddress" as const,
  "streetAddress": "Vytauto g. 80",
  "addressLocality": "Šiauliai",
  "postalCode": "77154",
  "addressCountry": "LT",
  "addressRegion": "Šiaulių apskritis"
};

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
  image: "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp",
  description:
    "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Aplikacijos ant drabužių",
  priceRange: "€€",
  address: baseAddress,
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
    "name": "Neringos Siuvimo Studija",
    "address": baseAddress,
    "telephone": "+37061516141",
    "priceRange": "€€",
    "image": "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp"
  },
  "areaServed": "Šiauliai",
  "description": "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Aplikacijos ant drabužių. Vienetinių lekalų konstravimas",
  "mainEntityOfPage": "https://www.neringos-siuvimo-studija.lt",
  "url": "https://www.neringos-siuvimo-studija.lt"
};

export const individualServicesSchemas: IndividualServiceSchema[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Drabužių taisymas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Drabužių taisymas",
    "description": "Profesionalus drabužių taisymas ir persiuvimas. Atliekame įvairių drabužių taisymo darbus: suknelių, marškinių, švarkų koregavimą pagal figūrą.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Individualus siuvimas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Individualus siuvimas",
    "description": "Individualus drabužių siuvimas pagal kliento pageidavimus ir išmatavimus. Siuvame sukneles, sijonus, kelnes, švarkus ir kitus drabužius.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aplikacijos ant drabužių",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Aplikacijos ant drabužių",
    "description": "Aplikacijų siuvimas ant drabužių, dekoravimas. Atliekame įvairius aplikavimo darbus ant marškinėlių, striukių, kelnių ir kitų drabužių.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vienetinių lekalų konstravimas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Lekalų konstravimas",
    "description": "Individualių lekalų kūrimas ir konstravimas pagal kliento matmenis. Pritaikome pagal individualius kūno ypatumus.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Užtrauktukų keitimas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Užtrauktukų keitimas",
    "description": "Profesionalus užtrauktukų keitimas įvairiuose drabužiuose. Naudojame kokybišką furnitūrą ir garantuojame ilgalaikį rezultatą.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pamušalo keitimas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Pamušalo keitimas",
    "description": "Profesionalus drabužių pamušalo keitimas striukėms, paltams, švarkams. Naudojame kokybišką pamušalinį audinį.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paltų ir striukių taisymas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Paltų taisymas",
    "description": "Profesionalus paltų ir striukių taisymas, įskaitant rankovių trumpinimą, užtrauktukų keitimą, pamušalo atnaujinimą.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kelnių taisymas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Kelnių taisymas",
    "description": "Kelnių siaurinimas, trumpinimas ir kiti taisymo darbai. Pritaikome kelnes pagal figūrą.",
    "areaServed": "Šiauliai"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sijonų taisymas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neringos Siuvimo Studija",
      "address": baseAddress,
    },
    "serviceType": "Sijonų taisymas",
    "description": "Profesionalus sijonų taisymas, įskaitant siaurinimą, trumpinimą, juosmens koregavimą.",
    "areaServed": "Šiauliai"
  }
];