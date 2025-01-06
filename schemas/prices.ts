import { ServiceListSchema } from "@/types/schema";


export const priceListSchema: ServiceListSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Neringos Siuvimo Studija",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vytauto g. 80",
    "addressLocality": "Šiauliai",
    "postalCode": "77154",
    "addressCountry": "LT",
    "addressRegion": "Šiaulių"  // Dabar įtraukiame šį lauką
  },
  "telephone": "+37060055316",
  "priceRange": "€€",
  "image": "https://www.neringos-siuvimo-studija.lt/logo.jpg",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Džinsų trumpinimas",
        "description": "Profesionalus džinsų trumpinimo paslauga",
        "url": "https://www.neringos-siuvimo-studija.lt/Images/rankoviu_trumpinimas.webp",
        "offers": {
          "@type": "Offer",
          "price": "10.00",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  }
};