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

export interface ProductReview {
  "@type": "Review";
  reviewRating: {
    "@type": "Rating";
    ratingValue: number;
    bestRating: number;
  };
  author: {
    "@type": "Person";
    name: string;
  };
  reviewBody?: string;
}

export interface ProductSchema extends SchemaBase {
  "@type": "Product";
  name: string;
  description: string;
  image?: string[];
  brand?: {
    "@type": "Brand";
    name: string;
  };
  offers?: {
    "@type": "Offer";
    price: number;
    priceCurrency: string;
    availability: string;
  };
  review?: ProductReview[];
}