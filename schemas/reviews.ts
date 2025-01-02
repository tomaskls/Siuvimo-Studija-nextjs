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
        name: "Karolis Jurkus"
      },
      datePublished: "2024-09-15",
      reviewBody: "Sutvarkė viska taip kaip norėjosi,dar net gereu , kas ieško greito kokybiško rūbu sutvarkymo rekomenduoju."
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Laimute R"
      },
      datePublished: "2023-09-01",
      reviewBody: "Rekomenduoju 100%, viskas puikiai, pasiuvo tobulai. Ačiū"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Grazina Kemesiene"
      },
      datePublished: "2021-12-15",
      reviewBody: "Puikus aptarnavimas ,suknele pasiuvo tobulai .Rekomenduoju visoms merginoms kurios nori atrodyti išskirtinai..Išsirinkus norimą pavizdį suknelės liksit sužavėtos ,atrodysit geriau nei paveikslėli po šios siuvėjos pasiuvimo ."
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Rima Barkauskiene"
      },
      datePublished: "2021-11-10",
      reviewBody: "Rekomenduoju! Profesionalūs darbai kalba patys už save. Mandagus bendravimas, paslaugus aptarnavimas bei kliento norų ir svajonių įgyvendinimas. Sėkmės!"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Fotoknygabysandra"
      },
      datePublished: "2021-09-25",
      reviewBody: "Likau labai maloniai aptarnauta, išklausė visus norus ir darbą atliko puikiai. Rekomenduoju"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Aleksandras Kubilinskas"
      },
      datePublished: "2021-07-10",
      reviewBody: "Puiki siuvėja, neatsisakė nuo nestandartiniu darbu. Puiki kokybė."
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        "@type": "Person",
        name: "Laura Skaumaniene"
      },
      datePublished: "2021-05-14",
      reviewBody: "Labai kruopšti, atsakinga, dėmesinga siuvėja."
    },
  ];