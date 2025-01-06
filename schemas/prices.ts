import { OfferCatalogSchema } from "@/types/schema";

export const priceListSchema: OfferCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Džinsų trumpinimas",
        description: "Profesionalus džinsų trumpinimo paslauga su originaliu siūlės išsaugojimu",
        url: "https://jusu-svetaines-url.lt/paslaugos/dzinsu-trumpinimas",
        provider: {
          "@type": "LocalBusiness",
          name: "Jūsų įmonės pavadinimas",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gatvės pavadinimas 1",
            addressLocality: "Vilnius",
            postalCode: "12345",
            addressCountry: "LT"
          }
        },
        offers: {
          "@type": "Offer",
          price: "10.00",
          priceCurrency: "EUR"
        },
        category: "Kelnių taisymas",
        areaServed: "Vilnius"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Kelnių siaurinimas",
        description: "Profesionalus kelnių siaurinimas pagal kliento pageidavimus",
        url: "https://jusu-svetaines-url.lt/paslaugos/kelniu-siaurinimas",
        provider: {
          "@type": "LocalBusiness",
          name: "Jūsų įmonės pavadinimas",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gatvės pavadinimas 1",
            addressLocality: "Vilnius",
            postalCode: "12345",
            addressCountry: "LT"
          }
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "20.00",
            maxPrice: "30.00",
            priceCurrency: "EUR"
          }
        },
        category: "Kelnių taisymas",
        areaServed: "Vilnius"
      }
    }
  ]
};