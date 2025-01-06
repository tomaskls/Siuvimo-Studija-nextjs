// src/types/schema/prices.ts

export interface ProductOfferType {
  "@type": "Offer";
  price?: string;
  priceCurrency?: string;
  priceSpecification?: {
    "@type": "PriceSpecification";
    minPrice: string;
    maxPrice: string;
    priceCurrency: string;
  };
  availability: string;
}

export interface ProductType {
  "@type": "Product";
  name: string;
  description: string;
  offers: ProductOfferType;
  url: string;
  category?: string;
  brand?: {
    "@type": "Brand";
    name: string;
  };
}

export interface OfferCatalogSchema {
  "@context": "https://schema.org";
  "@type": "ItemList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    item: ProductType;
  }[];
}

// Testinė schema su keliais pavyzdžiais
export const priceListSchema: OfferCatalogSchema = {
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
        url: "https://jusu-svetaines-url.lt/paslaugos/dzinsu-trumpinimas",
        brand: {
          "@type": "Brand",
          name: "Jūsų įmonės pavadinimas"
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
        url: "https://jusu-svetaines-url.lt/paslaugos/kelniu-siaurinimas",
        brand: {
          "@type": "Brand",
          name: "Jūsų įmonės pavadinimas"
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "20.00",
            maxPrice: "30.00",
            priceCurrency: "EUR"
          },
          availability: "https://schema.org/InStock"
        },
        category: "Kelnių taisymas"
      }
    }
  ]
};