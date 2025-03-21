import {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  AggregateRatingSchema,
} from "../src/types/schema";
import type { ReviewSchema } from "./reviews";
import { reviews } from "./reviews";

const baseAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "Vytauto g. 80",
  addressLocality: "Šiauliai",
  postalCode: "77154",
  addressCountry: "LT",
  addressRegion: "Šiaulių apskritis",
};

function calculateAggregateRating(
  reviewsArray: ReviewSchema[]
): AggregateRatingSchema {
  const totalRating = reviewsArray.reduce(
    (sum: number, review: ReviewSchema) => {
      return sum + review.reviewRating.ratingValue;
    },
    0
  );

  const averageRating = totalRating / reviewsArray.length;

  return {
    "@type": "AggregateRating",
    ratingValue: averageRating,
    reviewCount: reviewsArray.length,
    bestRating: 5,
  };
}

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
  image:
    "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp",
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
  telephone: "+37060055316",
  email: "neringos.siuvimo.studija@gmail.com",
  url: "https://www.neringos-siuvimo-studija.lt",
  paymentAccepted: ["Cash", "BankTransfer"],
  currenciesAccepted: "EUR",
  mainEntityOfPage: "https://www.neringos-siuvimo-studija.lt",
  hasMap: "https://www.google.com/maps?q=55.92782411660252,23.315946062172443",
  isAccessibleForFree: true,
  review: reviews,
  aggregateRating: calculateAggregateRating(reviews),
};

export const siuvimoPaslaugos: ServiceSchema = {
  name: "Siuvimo paslaugos",
  description:
    "Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.",
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Neringos Siuvimo Studija",
    address: baseAddress,
    telephone: "+37060055316",
    priceRange: "€€",
    image:
      "https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Siuvimo paslaugos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drabužių taisymas",
          description:
            "Profesionalus drabužių taisymas ir persiuvimas. Atliekame įvairių drabužių taisymo darbus: suknelių, marškinių, švarkų koregavimą pagal figūrą.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Individualus siuvimas",
          description:
            "Individualus drabužių siuvimas pagal kliento pageidavimus ir išmatavimus. Siuvame sukneles, sijonus, kelnes, švarkus ir kitus drabužius iš kliento arba mūsų siūlomų audinių.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aplikacijos ant drabužių",
          description:
            "Aplikacijos ant drabužių, dekoravimas. Atliekame įvairius aplikavimo darbus ant marškinėlių, striukių, kelnių ir kitų drabužių. Galime sukurti unikalų dizainą pagal jūsų pageidavimus.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vienetinių lekalų konstravimas",
          description:
            "Individualių lekalų kūrimas ir konstravimas pagal kliento matmenis. Paruošiame lekalus tolimesniam drabužių siuvimui, pritaikome pagal individualius kūno ypatumus.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Užtrauktukų keitimas",
          description:
            "Profesionalus užtrauktukų keitimas įvairiuose drabužiuose: kelnėse, striukėse, suknelėse, sijonuose. Naudojame kokybišką furnitūrą ir garantuojame ilgalaikį rezultatą.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pamušalo keitimas",
          description:
            "Profesionalus drabužių pamušalo keitimas striukėms, paltams, švarkams ir kt. Naudojame kokybišką pamušalinį audinį, atliekame kruopštų siuvimą ir užtikriname kokybišką rezultatą.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paltų ir striukių taisymas",
          description:
            "Profesionalus paltų ir striukių taisymas, įskaitant rankovių trumpinimą, užtrauktukų keitimą, pamušalo atnaujinimą. Pataisyti drabužiai atrodo kaip nauji.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kelnių taisymas",
          description:
            "Kelnių siaurinimas, trumpinimas ir kiti taisymo darbai. Pritaikome kelnes pagal jūsų figūrą, atliekame džinsų ir klasikinių kelnių taisymą, patobuliname pagal jūsų pageidavimus.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sijonų taisymas",
          description:
            "Profesionalus sijonų taisymas, įskaitant siaurinimą, trumpinimą, juosmens koregavimą. Pritaikome sijonus pagal jūsų figūrą ir pageidavimus.",
        },
      },
    ],
  },
};
