// src/types/schema/faq.ts
import type { FAQPageSchema } from "../src/types/schema";

export const faqSchema: FAQPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    // Drabužių taisymas - svarbiausi klausimai
    {
      "@type": "Question",
      name: "Kokius užtrauktukus keičiate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keičiame visų tipų užtrauktukus, įskaitant specialius - pūkinėms striukėms, vandeniui atspariems drabužiams, storoms žieminėms striukėms."
      }
    },
    {
      "@type": "Question",
      name: "Kiek kainuoja pakeisti užtrauktuką?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visos kainos nurodytos kainoraštyje."
      }
    },
    {
      "@type": "Question",
      name: "Ar trumpinate kelnes ir džinsus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, trumpiname kelnes ir džinsus, išlaikant originalų dizainą. Trumpiname su originaliais atvartais, juostelėmis ar paslėptu dygsniu."
      }
    },
    {
      "@type": "Question",
      name: "Kiek kainuoja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visos kainos nurodytos kainoraštyje."
      }
    },
    {
      "@type": "Question",
      name: "Ar taisote sijonus? Ar taisote švarkus? Ar taisote sukneles? Ar taisote vyriškus kostiumus? Ar taisote paltus? Kiek kainuoja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, taisome. Kainos nurodytos kainoraštyje. Jei kainoraštyje kainos nėra, ji nustatoma individualiai."
      }
    },
    {
      "@type": "Question",
      name: "Ar siuvate naujus drabužius?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, siuvame įvairius drabužius pagal individualius užsakymus ir kliento pageidavimus."
      }
    },
    {
      "@type": "Question",
      name: "Ar atliekate skubius užsakymus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, atliekame skubius užsakymus. Gali būti imamas papildomas mokestis."
      }
    },
    {
      "@type": "Question",
      name: "Ar galima užsisakyti individualų konsultavimą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, teikiame individualias konsultacijas dėl drabužių siuvimo, taisymo ir stiliaus formavimo."
      }
    },
    {
      "@type": "Question",
      name: "Ar pritaikote drabužius nestandartinės figūros žmonėms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, atliekame individualų drabužių pritaikymą. Galime pakoreguoti drabužio siūles, pakeisti rankovių ilgį, paplatinti ar susiaurinti."
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
      name: "Ar keičiate pamušalus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, keičiame pamušalus išsaugant originalią drabužio konstrukciją."
      }
    },
    {
      "@type": "Question",
      name: "Ar galite atkurti suplyšusius drabužių elementus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, galime atkurti suplyšusias vietas, įsiūti naujas detales."
      }
    },
    {
      "@type": "Question",
      name: "Ar taisote sportinę aprangą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, taisome sportines kelnes, striukes, specialią sportinę aprangą."
      }
    },
    {
      "@type": "Question",
      name: "Ar taisote vintage ar antikvarinius drabužius?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, turime specialios patirties atkuriant senus drabužius."
      }
    },
    {
      "@type": "Question",
      name: "Ar taisote uniformas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, taisome darbo, karines, mokyklines uniformas."
      }
    },
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
      name: "Ar teikiate garantiją savo darbams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, visiems mūsų atliktiems darbams taikome kokybės garantiją."
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
      name: "Kiek kainuoja individualus drabužio siuvimas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kaina priklauso nuo modelio sudėtingumo, pasirinktos medžiagos ir reikalingų detalių. Tikslią kainą nustatome individualios konsultacijos metu."
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
      name: "Ar reikalinga išankstinė registracija?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rekomenduojame iš anksto užsiregistruoti konsultacijai, kad nereiketų laukti."
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
      name: "Ar galite kopijuoti jau turimo drabužio modelį?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, galime sukurti naują drabužį pagal jūsų mėgstamo drabužio modelį, pritaikydami jį pagal jūsų pageidavimus."
      }
    },
    {
      "@type": "Question",
      name: "Kokias medžiagas naudojate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dirbame su natūraliomis ir sintetinėmis medžiagomis, įskaitant šilką, vilną, medvilnę, liną ir kitas aukštos kokybės medžiagas."
      }
    },
    {
      "@type": "Question",
      name: "Kiek kainuoja konsultacija?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pirminė konsultacija yra nemokama. Jos metu aptarsime jūsų pageidavimus ir numatysime tolimesnius veiksmus."
      }
    },
    {
      "@type": "Question",
      name: "Ar siuvate sceninę aprangą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, siuvame įvairią sceninę aprangą, kostiumus teatrui, šokiams ir kitiems scenos menams."
      }
    }
  ]
};