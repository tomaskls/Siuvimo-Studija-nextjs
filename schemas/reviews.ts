export interface ReviewSchema {
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
    datePublished: string;
    reviewBody: string;
  }
  
  export const reviews: ReviewSchema[] = [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Laura K."
      },
      datePublished: "2023-12-15",
      reviewBody: "Labai džiaugiuosi darbo kokybe. Greitai ir kokybiškai sutrumpino kelnes."
    }
  ];