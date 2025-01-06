// lib/schema.ts
import { ServiceListSchema } from "@/types/schema";

export const priceListSchema: ServiceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Džinsų trumpinimas",
        description: "Profesionalus džinsų trumpinimo paslauga",
        url: "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
        areaServed: "LT", // Pavyzdys
        serviceType: "Drabužių taisymas", // Pavyzdys
        brand: {
          "@type": "Brand",
          name: "Neringos Siuvimo Studija"
        },
        offers: {
          "@type": "Offer",
          price: "10.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          category: "Kelnių taisymas"
        }
      }
    },
    // ... kiti paslaugų įrašai
  ]
};