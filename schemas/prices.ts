// src/types/schema/prices.ts
import type { OfferCatalogSchema } from "../src/types/schema";

export const priceListSchema: OfferCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Drabužių taisymo kainoraštis",
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Kelnių trumpinimas ir taisymas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Džinsų trumpinimas",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Kelnių trumpinimas mašina",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Kelnių trumpinimas su juostele",
          price: "12.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Kelnių trumpinimas su atvartais",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Sportiniu kelnių trumpinimas su užtrauktukais",
          price: "12.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Kelnių trumpinimas paslėptu dygsniu",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Kelnių siaurinimas per liemenį",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "15.00",
            maxPrice: "20.00",
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "Offer",
          name: "Kelnių siaurinimas",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "20.00",
            maxPrice: "30.00",
            priceCurrency: "EUR"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Sijonų taisymas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Sijono trumpinimas",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "10.00",
            maxPrice: "15.00",
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "Offer",
          name: "Sijono trumpinimas su pamušalu",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "12.00",
            maxPrice: "15.00",
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "Offer",
          name: "Sijono siaurinimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Sijono siaurinimas su pamušalu",
          price: "20.00",
          priceCurrency: "EUR"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Švarkų taisymas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Švarko siaurinimas (1 siūlė)",
          price: "8.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Švarko apačios trumpinimas",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "15.00",
            maxPrice: "20.00",
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "Offer",
          name: "Švarko rankovių trumpinimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Švarko rankovių perstatymas",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Švarko su pamušalu siaurinimas (1 siūlė)",
          price: "10.00",
          priceCurrency: "EUR"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Suknelių taisymas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Suknelės siaurinimas per šonines siūles",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Suknelės apačios lenkimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Suknelės plačia apačia su pamušalu trumpinimas",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Suknelės petnešų trumpinimas",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Suknelės rankovių trumpinimas",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Suknelės rankovių perstatymas",
          price: "15.00",
          priceCurrency: "EUR"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Vyr. kostiumų taisymas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Vyriško švarko siaurinimas",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vyriško švarko rankovių trumpinimas",
          price: "25.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vyriško švarko apačios trumpinimas",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vyriško švarko rankovių perstatymas",
          price: "40.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vyrišk kelnių apačios lenkimas su juostele",
          price: "12.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vyriškų kelnių siaurinimas",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "20.00",
            maxPrice: "40.00",
            priceCurrency: "EUR"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Paltų taisymas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Palto apačios lenkimas",
          price: "30.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Palto rankovių trumpinimas",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Palto rankovių perstatymas",
          price: "30.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Palto siaurinimas",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "20.00",
            maxPrice: "40.00",
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "Offer",
          name: "Palto apykaklės persiuvimas",
          price: "20.00",
          priceCurrency: "EUR"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Pamušalų keitimas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Palto pamušalo keitimas",
          price: "35.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Puspalčio pamušalo keitimas",
          price: "30.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Švarko pamušalo keitimas",
          price: "30.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Sijono pamušalo keitimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Sukneles pamušalo keitimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Striukes pamušalo keitimas",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "25.00",
            maxPrice: "35.00",
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "Offer",
          name: "Kailinių pamušalo keitimas",
          price: "50.00",
          priceCurrency: "EUR"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      name: "Užtrauktukų keitimas",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Žieminęs striukės užtrauktuko keitimas",
          price: "25.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Plonos striukės užtrauktuko keitimas ",
          price: "20.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vaikiškos striukės užtrauktuko keitimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Džinsų užtrauktuko keitimas",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Sijono užtrauktuko keitimas",
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Vyr. kelnių užtrauktuko keitimas",
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Puspalčio užtrauktuko keitimas",
          price: "25.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          name: "Palto užtrauktuko keitimas",
          price: "30.00",
          priceCurrency: "EUR"
        }
      ]
    }
  ]
};