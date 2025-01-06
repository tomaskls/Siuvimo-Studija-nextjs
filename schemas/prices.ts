import { ServiceListSchema } from "@/types/schema";


export const priceListSchema: ServiceListSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Neringos Siuvimo Studija",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Džinsų trumpinimas",
        "description": "Profesionalus džinsų trumpinimo paslauga",
        "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
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