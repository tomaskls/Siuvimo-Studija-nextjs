// types/Schema.types.ts

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
}

export interface ServiceOffered {
  "@type": "Service";
  name: string;
  description: string;
}

export interface ServiceOffer {
  "@type": "Offer";
  itemOffered: ServiceOffered;
}

export interface ServiceCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: ServiceOffer[];
}

export interface ServiceSchema extends SchemaBase {
  "@type": "Service";
  name: string;
  serviceType: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
  };
  areaServed: string;
  description: string;
  offers: {
    "@type": "Offer";
    availableAtOrFrom: {
      "@type": "LocalBusiness";
      address: PostalAddress;
    };
  };
  hasOfferCatalog: ServiceCatalog;
}