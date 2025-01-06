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
    "addressRegion": "Šiaulių"  
  },
  "telephone": "+37060055316",
  "priceRange": "€€",
  "image": "https://www.neringos-siuvimo-studija.lt/Images/rankoviu_trumpinimas.webp",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
        {
          "@type": "Service",
          "name": "Džinsų trumpinimas",
          "description": "Profesionali džinsų trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių trumpinimas",
          "description": "Profesionali kelnių trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių trumpinimas su juostele",
          "description": "Profesionali kelnių trumpinimo su juostele paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "12.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių trumpinimas su atvartais",
          "description": "Profesionali kelnių trumpinimo su atvartais paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sportiniu kelnių su užtrauktukais",
          "description": "Profesionali sportinių kelnių su užtrauktukais paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "12.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių trumpinimas paslėptu dygsniu",
          "description": "Profesionali kelnių trumpinimo paslėptu dygsniu paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių siaurinimas per liemenį",
          "description": "Profesionali kelnių siaurinimo per liemenį paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių siaurinimas",
          "description": "Profesionali kelnių siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sijono trumpinimas",
          "description": "Profesionali sijono trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sijono trumpinimas su pamušalu",
          "description": "Profesionali sijono trumpinimo su pamušalu paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "12.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sijono siaurinimas",
          "description": "Profesionali sijono siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sijono siaurinimas su pamušalu",
          "description": "Profesionali sijono siaurinimo su pamušalu paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Švarko siaurinimas (1 siūlė)",
          "description": "Profesionali švarko siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "8.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Švarko apačios trumpinimas",
          "description": "Profesionali švarko apačios trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Švarko rankovių trumpinimas",
          "description": "Profesionali švarko rankovių trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Švarko rankovių perstatymas",
          "description": "Profesionali švarko rankovių perstatymo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Švarko su pamušalu siaurinimas (1 siūlė)",
          "description": "Profesionali švarko su pamušalu siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės siaurinimas per šonines siūles",
          "description": "Profesionali suknelės siaurinimo per šonines siūles paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės apačios lenkimas",
          "description": "Profesionali suknelės apačios lenkimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės plačia apačia su pamušalu trumpinimas",
          "description": "Profesionali suknelės plačia apačia su pamušalu trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės petnešų trumpinimas",
          "description": "Profesionali suknelės petnešų trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės rankovių trumpinimas",
          "description": "Profesionali suknelės rankovių trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės rankovių perstatymas",
          "description": "Profesionali suknelės rankovių perstatymo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Vyr. švarko siaurinimas",
          "description": "Profesionali vyriško švarko siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Vyr. švarko rankovių trumpinimas",
          "description": "Profesionali vyriško švarko rankovių trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "25.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Vyr. švarko apačios trumpinimas",
          "description": "Profesionali vyriško švarko apačios trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Vyr. švarko rankovių perstatymas",
          "description": "Profesionali vyriško švarko rankovių perstatymo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "40.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių apačios lenkimas su juostele",
          "description": "Profesionali kelnių apačios lenkimo su juostele paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "12.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kelnių siaurinimas",
          "description": "Profesionali kelnių siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto apačios lenkimas",
          "description": "Profesionali palto apačios lenkimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto rankovių trumpinimas",
          "description": "Profesionali palto rankovių trumpinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto rankovių perstatymas",
          "description": "Profesionali palto rankovių perstatymo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto siaurinimas",
          "description": "Profesionali palto siaurinimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto apykaklės persiuvimas",
          "description": "Profesionali palto apykaklės persiuvimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto pamušalo keitimas",
          "description": "Profesionali palto pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "35.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Puspalčio pamušalo keitimas",
          "description": "Profesionali puspalčio pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Švarko pamušalo keitimas",
          "description": "Profesionali švarko pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sijono pamušalo keitimas",
          "description": "Profesionali sijono pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Suknelės pamušalo keitimas",
          "description": "Profesionali suknelės pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Striukės pamušalo keitimas",
          "description": "Profesionali striukės pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "25.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Kailinių pamušalo keitimas",
          "description": "Profesionali kailinių pamušalo keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "50.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Žieminės striukės užtrauktuko keitimas",
          "description": "Profesionali žieminės striukės užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "25.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Plonos striukės užtrauktuko keitimas",
          "description": "Profesionali plonos striukės užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Vaikiškos striukės užtrauktuko keitimas",
          "description": "Profesionali vaikiškos striukės užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Džinsų užtrauktuko keitimas",
          "description": "Profesionali džinsų užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Sijono užtrauktuko keitimas",
          "description": "Profesionali sijono užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Vyr. kelnių užtrauktuko keitimas",
          "description": "Profesionali vyriškų kelnių užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Puspalčio užtrauktuko keitimas",
          "description": "Profesionali puspalčio užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "25.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Palto užtrauktuko keitimas",
          "description": "Profesionali palto užtrauktuko keitimo paslauga",
          "url": "https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }
      ],
      
  }
};