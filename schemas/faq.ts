// src/types/schema/faq.ts
import type { FAQPageSchema } from "../src/types/schema";

export const faqSchema: FAQPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    // Drabužių taisymas - svarbiausi klausimai
    {
      "@type": "Question",
      name: "Kiek laiko užtrunka drabužių taisymas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Priklauso nuo darbo sudėtingumo. Paprastas taisymas - 1-2 dienos, sudėtingesni darbai - kelios dienos."
      }
    },
    {
      "@type": "Question",
      name: "Kokius užtrauktukus galite pakeisti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keičiame visų tipų užtrauktukus, įskaitant specialius - pūkinėms striukėms, vandeniui atspariems drabužiams, storoms žieminėms striukėms."
      }
    },
    {
      "@type": "Question",
      name: "Kaip pritaikote drabužius nestandartinės figūros žmonėms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atliekame individualų drabužių pritaikymą, atsižvelgdami į kūno ypatumus. Galime koreguoti drabužio siūles, pakeisti rankovių ilgį, paplatinti ar susiaurinti."
      }
    },
    {
      "@type": "Question",
      name: "Ar dirbate su įvairiomis medžiagomis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dirbame su natūraliomis ir sintetinėmis medžiagomis, įskaitant šilką, vilną, medvilnę, liną ir kitas aukštos kokybės medžiagas."
      }
    },
    {
      "@type": "Question",
      name: "Ar taisote pažeistus drabužius?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, atliekame drabužių lopymą, rekonstrukciją, nuplėšytų siūlių tvarkymą. Stengiamės išsaugoti originalų drabužio dizainą."
      }
    },
    {
      "@type": "Question",
      name: "Kaip elgiatės su vintage ar antikvariniais drabužiais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turime specialią patirtį atkurti senus drabužius, išsaugant jų autentiškumą ir originalią estetiką."
      }
    },
    {
      "@type": "Question",
      name: "Ar tausojate originalų drabužio dizainą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visada stengiamės išlaikyti originalų drabužio charakterį, stilių ir dizaino ypatubes."
      }
    },
    // Individualus siuvimas - svarbiausi klausimai
    {
      "@type": "Question",
      name: "Kokias individualaus siuvimo paslaugas teikiate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siuvame individualius drabužius pagal kliento užsakymą, pritaikome ir persiuvame jau turimus drabužius, atliekame sudėtingus taisymus ir rekonstrukcijas."
      }
    },
    {
      "@type": "Question",
      name: "Kiek laiko užtrunka drabužio siuvimas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paprastas modelis užtrunka 1-2 savaites, sudėtingas individualus modelis - 3-4 savaites."
      }
    },
    {
      "@type": "Question",
      name: "Kaip vyksta individualaus drabužio kūrimo procesas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Procesas apima: pirminę konsultaciją ir idėjų aptarimą, eskizų kūrimą, medžiagų ir detalių parinkimą, matmenų nuėmimą, bandomąjį išbandymą ir galutinį pritaikymą."
      }
    },
    {
      "@type": "Question",
      name: "Ar galite kopijuoti jau turimo drabužio modelį?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, galime sukurti naują drabužį pagal jūsų mėgstamo drabužio modelį, pritaikydami jį pagal jūsų pageidavimus."
      }
    },
    {
      "@type": "Question",
      name: "Ar teikiate konsultacijas stiliaus klausimais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, teikiame išsamias konsultacijas dėl stiliaus, spalvų derinimo, drabužių pritaikymo pagal figūrą."
      }
    },
    {
      "@type": "Question",
      name: "Ar dirbate su specialiomis medžiagomis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turime patirties dirbti su oda, šilku, nėriniu, kailio gaminiais ir kitomis specifinėmis medžiagomis."
      }
    },
    {
      "@type": "Question",
      name: "Ar taikote individualų požiūrį į kiekvieną klientą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kiekvienam klientui skiriame individualų dėmesį, atsižvelgiame į jo pageidavimus, figūros ypatumus ir stilių."
      }
    }
  ]
};
