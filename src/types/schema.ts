import { ReviewSchema } from "../../schemas/reviews";

interface AnswerType {
  "@type": "Answer";
  text: string;
}

// Klausimo tipas
interface QuestionType {
  "@type": "Question";
  name: string;
  acceptedAnswer: AnswerType;
}

// Pagrindinis FAQ schema tipas
export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: QuestionType[];
}

export interface SchemaBase {
  "@context": "https://schema.org";
  "@type": string;
}

export interface ContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  contactType: string;
  email?: string;
  areaServed?: string;
}

export interface AggregateRatingSchema {
  "@type": "AggregateRating";
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
}

export interface OrganizationSchema extends SchemaBase {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: ContactPoint[];
  sameAs?: string[];
}

export interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
  addressRegion: string;
}

export interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

export interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface LocalBusinessSchema extends SchemaBase {
  "@type": "LocalBusiness";
  "@id": string;
  name: string;
  image: string;
  description: string;
  priceRange: string;
  address: PostalAddress;
  geo: GeoCoordinates;
  openingHoursSpecification: OpeningHoursSpecification[];
  telephone: string;
  email: string;
  url: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  mainEntityOfPage: string;
  hasMap: string;
  isAccessibleForFree: boolean;
  review?: ReviewSchema[];
  aggregateRating?: AggregateRatingSchema;
}

export interface ServiceProvider {
  "@type": "LocalBusiness";
  name: string;
  address: PostalAddress;
  telephone?: string;
  priceRange?: string;
  image?: string;
}

export interface ServiceSchema extends SchemaBase {
  "@type": "Service";
  name: string;
  description: string;
  review?: ReviewSchema[];
  aggregateRating?: AggregateRatingSchema;
  url?: string;
  provider: ServiceProvider;
  areaServed?: string;
  category?: string;
  priceRange?: string;
  image?: string;
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: {
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }[];
  };
}