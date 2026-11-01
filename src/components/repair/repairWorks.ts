import type { Work } from '../works/types';

// Darbų pavyzdžiai puslapyje /drabuziu-taisymas (rodomi šia tvarka, naujausi – viršuje).
// Naują darbą įrašykite sąrašo pradžioje. Kiek darbų rodoma iš karto – drabuziu-taisymas/page.tsx initialCount.
// Miniatiūros apkerpamos iki 2:3 (photoRatio), kad tilptų ir „prieš ir po“ koliažai; visa nuotrauka matoma peržiūroje.

export const repairWorks: Work[] = [
  {
    title: '✂️ Paltų siaurinimas, rankovių trumpinimas',
    images: [
      { src: '/imgGallery/2026/palto-siaurinimas-rankoviu-trumpinimas.webp', alt: 'Smėlio spalvos palto su kailine apykakle siaurinimas ir rankovių trumpinimas', width: 900, height: 2010 },
    ],
  },
  {
    title: '✂️ Puspalčių siaurinimas, rankovių trumpinimas',
    images: [
      { src: '/imgGallery/2026/puspalcio-siaurinimas-rankoviu-trumpinimas.webp', alt: 'Pilkšvai smėlio spalvos dvieilio puspalčio siaurinimas ir rankovių trumpinimas', width: 900, height: 1600 },
    ],
  },
  {
    title: '✂️ Tvido švarko rankovių perstatymas',
    images: [
      { src: '/imgGallery/2026/tvido-svarko-rankoviu-perstatymas.webp', alt: 'Tvido švarkas su atsiūtomis rankovėmis taisymo metu', width: 900, height: 1600 },
      { src: '/imgGallery/2026/tvido-svarkas-po-rankoviu-perstatymo.webp', alt: 'Tvido švarkas po rankovių perstatymo', width: 900, height: 1600 },
    ],
  },
  {
    title: '✂️ Vyriško švarko rankovių trumpinimas',
    images: [
      { src: '/imgGallery/2026/svarko-rankoves-pries-trumpinima.webp', alt: 'Pilko vyriško švarko rankovė prieš trumpinimą', width: 900, height: 1600 },
      { src: '/imgGallery/2026/svarko-rankoves-trumpinimas-detale.webp', alt: 'Švarko rankovės galas su kilpomis sagoms ir pažymėtu nauju ilgiu', width: 900, height: 1600 },
    ],
  },
  {
    title: '✂️ Vestuvinių suknelių taisymas',
    images: [
      { src: '/imgGallery/2026/IMG20260629100251.webp', alt: 'Vestuvinės suknelės nuleistais pečiais taisymas', width: 537, height: 1200 },
      { src: '/imgGallery/2026/IMG_20250812_090016.webp', alt: 'Vestuvinės suknelės su nėriniais ir tiulio sijonu taisymas', width: 537, height: 1200 },
    ],
  },
  {
    title: '✂️ Proginių suknelių taisymas, trumpinimas, siaurinimas',
    images: [
      { src: '/imgGallery/2026/IMG20260619115747.webp', alt: 'Proginio komplekto taisymas: balta asimetrinė palaidinė ir juodas ilgas sijonas', width: 537, height: 1200 },
      { src: '/imgGallery/2026/IMG20260618103519.webp', alt: 'Rožinės proginės suknelės su tiulio apačia trumpinimas ir siaurinimas', width: 537, height: 1200 },
      { src: '/imgGallery/2026/IMG20260615145653.webp', alt: 'Žalios atlasinės proginės suknelės taisymas', width: 537, height: 1200 },
      { src: '/imgGallery/2026/IMG20260505115354.webp', alt: 'Bordo spalvos suknelės su nėrinių apačia taisymas', width: 537, height: 1200 },
    ],
  },
  {
    title: '✂️ Klasikinio kostiumo taisymas',
    text: 'Rankovių trumpinimas, siaurinimas, švarko apačios trumpinimas.',
    images: [
      { src: '/imgGallery/2026/IMG20260421153312.webp', alt: 'Juodo smokingo rankovių trumpinimas ir siaurinimas', width: 675, height: 1200 },
      { src: '/imgGallery/2026/IMG20260421153044.webp', alt: 'Smokingo ir baltos suknelės atvira nugara taisymas', width: 675, height: 1200 },
      { src: '/imgGallery/2026/IMG20260407132052.webp', alt: 'Žalio vyriško kostiumo su liemene taisymas', width: 675, height: 1200 },
      { src: '/imgGallery/2026/IMG20260325105354.webp', alt: 'Žalio švarko apačios trumpinimas', width: 675, height: 1200 },
    ],
  },
  {
    title: '✂️ Proginė suknelė',
    text: 'Proginės suknelės trumpinimas ir siaurinimas',
    images: [
      { src: '/imgGallery/2026/IMG_20251202_155745.webp', alt: 'Pilkos blizgios proginės suknelės trumpinimas ir siaurinimas', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Proginė suknelė',
    text: 'Suknelė patrumpinta, iš likusio audinio pritaikytos rankovės.',
    images: [
      { src: '/imgGallery/2026/IMG_20260321_091440.webp', alt: 'Rožinės proginės suknelės su nėriniais trumpinimas', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Vakarinė suknelė',
    text: 'Paaukštinta pečių linija, sutvarkyti iširę karoliukai (rankų darbas)',
    images: [
      { src: '/imgGallery/2026/IMG_20251204_103145.webp', alt: 'Vakarinė suknelė', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Kailiniai',
    text: 'Patrumpintos rankovės, padaryta papildoma kilpa sagai, siūlių sutvirtinimas',
    images: [
      { src: '/imgGallery/2026/IMG20260121172501.webp', alt: 'Kailiniai', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Modernus švarkas',
    text: 'Susiaurintas švarkas, paryškinant figūrą.',
    images: [
      { src: '/imgGallery/2026/IMG_20260223_114453.webp', alt: 'Modernus švarkas', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Puspaltis',
    text: 'Pritaikyta kailinė apykaklė',
    images: [
      { src: '/imgGallery/2026/IMG20251110145415.webp', alt: 'Kailinių su kailine apykakle taisymas', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Proginis kostiumėlis',
    text: 'Sumažinta pažastis, iš tokios pat spalvos pasiūtos rankovės.',
    images: [
      { src: '/imgGallery/2026/IMG_20260220_075355.webp', alt: 'Raudono proginio kostiumėlio taisymas: pasiūtos naujos rankovės', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Demisezoninis paltas',
    text: 'Patrumpintas paltas 10 cm.',
    images: [
      { src: '/imgGallery/2026/IMG_20260210_214228.webp', alt: 'Juodo demisezoninio palto trumpinimas', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Odinė striukė',
    text: 'Rankovių trumpinimas.',
    images: [
      { src: '/imgGallery/2026/IMG20260313100745.webp', alt: 'Odinės striukės rankovių trumpinimas', width: 900, height: 1200 },
      { src: '/imgGallery/2026/IMG20260312125337.webp', alt: 'Odinė striukė', width: 900, height: 1200 },
    ],
  },
  {
    title: '✂️ Striukės rankovių ilginimas',
    text: 'Pailgintos striukės rankovės Rib trikotažu',
    images: [
      { src: '/Images/striukes.webp', alt: 'Striukės rankovių ilginimas', width: 900, height: 1187 },
    ],
  },
  {
    title: '✂️ Vyriško klasikinio kostiumo taisymas',
    text: 'Sutrumpintos švarko rankovės',
    images: [
      { src: '/Images/svarko.webp', alt: 'Vyriško švarko rankovių trumpinimas', width: 900, height: 1187 },
    ],
  },
  {
    title: '✂️ Palto rankovių trumpinimas',
    text: 'Sutrumpintos palto rankovės',
    images: [
      { src: '/imgGallery/1000005279.webp', alt: 'Palto rankovių trumpinimas: prieš ir po', width: 900, height: 1186 },
    ],
  },
  {
    title: '✂️ Eko odos striukės rankovių trumpinimas',
    text: 'Sutrumpintos striukės rankovės',
    images: [
      { src: '/imgGallery/eko_odos_taisymas.webp', alt: 'Eko odos taisymas', width: 900, height: 1186 },
    ],
  },
  {
    title: '✂️ Džinsų trumpinimas',
    text: 'Džinsai patrumpinti, pritaikant originalios spalvos siūlus',
    images: [
      { src: '/imgGallery/dzinsu_trumpinimas.webp', alt: 'Džinsų trumpinimas', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Proginių suknelių taisymas',
    text: 'Suknelė susiaurinta per šonines siūles, pakoreguotos pūstos rankovės pečių srityje.',
    images: [
      { src: '/imgGallery/proginiu_sukneliu_taisymas.webp', alt: 'Suknelės pūstomis rankovėmis siaurinimas', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Suknelės modeliavimas',
    text: 'Originali suknelė buvo be rankovių. Buvo parinktas audinys ir sumodeliuotos naujos rankovės',
    images: [
      { src: '/Images/sukneles_modeliavimas.webp', alt: 'Suknelės modeliavimas', width: 900, height: 1186 },
    ],
  },
  {
    title: '✂️ Palto rankovių trumpinimas',
    text: 'Dirbtinio kailio paltas pritaikytas pagal kliento pageidavimus - rankovės sutrumpintos 6 cm, išlaikytas originalus dizainas.',
    images: [
      { src: '/Images/rankoviu_trumpinimas.webp', alt: 'Dirbtinio kailio palto rankovių trumpinimas', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Odinės striukės taisymas',
    text: 'Odinės striukės įplyšimas sutaisytas ir nepastebimai restauruotas.',
    images: [
      { src: '/Images/odiniu_rubu_taisymas.webp', alt: 'Odinės striukės taisymas: prieš ir po', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Užtrauktuko keitimas',
    text: 'Kokybiškai atliktas paslėpto užtrauktuko keitimas kelnėse.',
    images: [
      { src: '/Images/uztrauktuku_taisymas.webp', alt: 'Užtrauktukų keitimas', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Striukės rankovių trumpinimas',
    text: 'Klientės vandeniui atspari striukė pritaikyta tobulai! Rankovės sutrumpintos 5 cm, išlaikant visas striukės funkcijas.',
    images: [
      { src: '/Images/striukes_rankoviu_trumpinimas.webp', alt: 'Striukės rankovės prieš trumpinimą ir po', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Išskirtinio modelio proginės suknelės taisymas',
    text: 'Suknelė susiaurinta per krūtinę',
    images: [
      { src: '/Images/proginiu_sukneliu_taisymas.webp', alt: 'Juoda suknelė su naujai sumodeliuotomis rankovėmis', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Suknelės modeliavimas',
    text: 'Suknelė pritaikyta pagal kliento figūrą - sutrumpinta ir susiaurinta. Išlaikytos originalios suknelės linijos ir dizaino elementai.',
    images: [
      { src: '/Images/Sukneles_trumpinimas_siaurinimas.webp', alt: 'Suknelės trumpinimo procesas', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Švarko rankovių koregavimas',
    text: 'Moteriškam švarkui perstatytos rankovės - pakoreguota rankovių padėtis optimaliam gulėjimui ir patogumui. Išlaikytos originalios švarko proporcijos ir elegancija.',
    images: [
      { src: '/Images/Svarko_peciu_perstatymas.webp', alt: 'Švarko rankovių perstatymo etapai', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Užtrauktuko keitimas',
    text: 'Pūkinės striukės užtrauktukas pakeistas nauju, specialiai pritaikytu storiems pūkiniams drabužiams.',
    images: [
      { src: '/Images/striukes_uztrauktuko_keitimas.webp', alt: 'Striukės užtrauktuko keitimo etapai', width: 900, height: 1350 },
    ],
  },
  {
    title: '✂️ Pamušalo įsiuvimas',
    text: 'Į kailinius įsiutas pamušalas. Suteikiantis papildomą šilumą',
    images: [
      { src: '/Images/pamusalo_keitimas.webp', alt: 'Pamušalo įsiuvimas į kailinius', width: 900, height: 1350 },
    ],
  },
];
