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
  
  // Atsiliepimai iš „Google“. Puslapyje rodomi nuo naujausio (pagal datePublished).
  // 2025–2026 m. datos apytikslės: „Google“ rodo tik „prieš X mėn.“ (užrašyta 2026-11-01)
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
        name: "Jolanta Chlevickiene"
      },
      datePublished: "2026-10-01",
      reviewBody: "Paprasta suderinti, nepaprastai tinkantys rezultatai!!! Dėkinga, rekomenduoju, turiu naujų idėjų!!"
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
        name: "Asta Baubonyte"
      },
      datePublished: "2026-06-01",
      reviewBody: "Labai patiko! Visiems rekomenduosiu."
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
        name: "ignas.z."
      },
      datePublished: "2026-05-01",
      reviewBody: "Operatyviai ir greitai, labai dailiai prailgintos kelnės. Siuvėja Neringa nurodė, kur nusipirkti audinio kelnėm, kartu nusprendėm geriausią prailginimo variantą, kad atrodytų solidžiai. Kainos ir kokybės santykis tobulas. Duodu 10 balų :)"
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
        name: "Allin"
      },
      datePublished: "2025-12-01",
      reviewBody: "Labai kokybiškai įsiūti užtrauktukai į šortus. Atrodo lyg tokius būtum nusipirkęs tiesiai iš parduotuvės. Rekomenduoju!"
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
        name: "Ruta Mali"
      },
      datePublished: "2025-11-01",
      reviewBody: "Jau keletą metų einu pas Neringą taisytis/ siūtis drabužius. Visada lieku patenkinta rezultatais. Planuoju ir toliau naudotis Neringos siuvimo paslaugomis ir tikrai galiu ją rekomenduoti."
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