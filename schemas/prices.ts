import { ServiceListSchema, ServiceOffer } from "@/types/schema";
import { BUSINESS_ID, baseAddress } from "./index";
import { priceList, Price } from "../src/data/prices";

const PRICES_URL = "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymo-kainos";

// Kainos intervalas (pvz. 15-20€) aprašomas per PriceSpecification su minPrice / maxPrice
function toOffer(price: Price, category: string): ServiceOffer {
  const base = {
    "@type": "Offer" as const,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    category,
  };
  if (!Array.isArray(price)) {
    return { ...base, price: price.toFixed(2) };
  }
  return {
    ...base,
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: price[0].toFixed(2),
      maxPrice: price[1].toFixed(2),
      priceCurrency: "EUR",
    },
  };
}

// Generuojama iš src/data/prices.ts, todėl visada sutampa su puslapyje rodomu kainoraščiu
export const priceListSchema: ServiceListSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: "Neringos Siuvimo Studija",
  address: baseAddress,
  telephone: "+37060055316",
  priceRange: "€€",
  image: "https://www.neringos-siuvimo-studija.lt/Images/rankoviu_trumpinimas.webp",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drabužių taisymo kainoraštis",
    itemListElement: priceList.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Service" as const,
        name: item.name,
        description: `${section.title}: ${item.name.toLowerCase()}`,
        url: PRICES_URL,
        offers: toOffer(item.price, section.title),
      }))
    ),
  },
};
