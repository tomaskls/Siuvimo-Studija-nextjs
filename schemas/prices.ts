import { ProductListSchema } from "@/types/schema";

export const priceListSchema: ProductListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Džinsų trumpinimas",
        description: "Profesionalus džinsų trumpinimo paslauga su originaliu siūlės išsaugojimu",
        url: "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
        brand: {
          "@type": "Brand",
          name: "Neringos Siuvimo Studija"
        },
        offers: {
          "@type": "Offer",
          price: "10.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        category: "Kelnių taisymas"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Kelnių siaurinimas",
        description: "Profesionalus kelnių siaurinimas pagal kliento pageidavimus",
        url: "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
        brand: {
          "@type": "Brand",
          name: "Neringos Siuvimo Studija"
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "20.00",
            maxPrice: "30.00",
            priceCurrency: "EUR"
          }
        },
        category: "Kelnių taisymas"
      }
    }
  ]
};