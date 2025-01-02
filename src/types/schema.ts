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