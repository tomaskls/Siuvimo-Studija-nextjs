// Kainoraštis: iš šių duomenų generuojamas /drabuziu-taisymo-kainos puslapis ir jo JSON-LD schema.
// price: viena kaina (10) arba intervalas ([15, 20]), eurais.
export type Price = number | [number, number];

export interface PriceSection {
  title: string;
  items: { name: string; price: Price }[];
}

export const priceList: PriceSection[] = [
  {
    title: 'Kelnių trumpinimas',
    items: [
      { name: 'Džinsų trumpinimas', price: 10 },
      { name: 'Kelnių trumpinimas mašina', price: 10 },
      { name: 'Kelnių trumpinimas su juostele', price: 12 },
      { name: 'Kelnių trumpinimas su atvartais', price: 10 },
      { name: 'Sportinių kelnių su užtrauktukais', price: 12 },
      { name: 'Kelnių trumpinimas paslėptu dygsniu', price: 10 },
      { name: 'Kelnių siaurinimas per liemenį', price: [15, 20] },
      { name: 'Kelnių siaurinimas', price: [20, 30] },
    ],
  },
  {
    title: 'Sijonų taisymas',
    items: [
      { name: 'Sijono trumpinimas', price: [10, 15] },
      { name: 'Sijono trumpinimas su pamušalu', price: [12, 15] },
      { name: 'Sijono siaurinimas', price: 15 },
      { name: 'Sijono siaurinimas su pamušalu', price: 20 },
    ],
  },
  {
    title: 'Švarkų taisymas',
    items: [
      { name: 'Švarko siaurinimas (1 siūlė)', price: 8 },
      { name: 'Švarko apačios trumpinimas', price: [15, 20] },
      { name: 'Švarko rankovių trumpinimas', price: 15 },
      { name: 'Švarko rankovių perstatymas', price: 20 },
      { name: 'Švarko su pamušalu siaurinimas (1 siūlė)', price: 10 },
    ],
  },
  {
    title: 'Suknelių taisymas',
    items: [
      { name: 'Suknelės siaurinimas per šonines siūles', price: 20 },
      { name: 'Suknelės apačios lenkimas', price: 15 },
      { name: 'Suknelės plačia apačia su pamušalu trumpinimas', price: 20 },
      { name: 'Suknelės petnešų trumpinimas', price: 10 },
      { name: 'Suknelės rankovių trumpinimas', price: 10 },
      { name: 'Suknelės rankovių perstatymas', price: 15 },
    ],
  },
  {
    title: 'Vyr. kostiumų taisymas',
    items: [
      { name: 'Vyr. švarko siaurinimas', price: 20 },
      { name: 'Vyr. švarko rankovių trumpinimas', price: 25 },
      { name: 'Vyr. švarko apačios trumpinimas', price: 20 },
      { name: 'Vyr. švarko rankovių perstatymas', price: 40 },
      { name: 'Kelnių apačios lenkimas su juostele', price: 12 },
      { name: 'Kelnių siaurinimas', price: [20, 40] },
    ],
  },
  {
    title: 'Paltų taisymas',
    items: [
      { name: 'Palto apačios lenkimas', price: 30 },
      { name: 'Palto rankovių trumpinimas', price: 20 },
      { name: 'Palto rankovių perstatymas', price: 30 },
      { name: 'Palto siaurinimas', price: [20, 40] },
      { name: 'Palto apykaklės persiuvimas', price: 20 },
    ],
  },
  {
    title: 'Pamušalų keitimas',
    items: [
      { name: 'Palto pamušalo keitimas', price: 35 },
      { name: 'Puspalčio pamušalo keitimas', price: 30 },
      { name: 'Švarko pamušalo keitimas', price: 30 },
      { name: 'Sijono pamušalo keitimas', price: 15 },
      { name: 'Suknelės pamušalo keitimas', price: 15 },
      { name: 'Striukės pamušalo keitimas', price: [25, 35] },
      { name: 'Kailinių pamušalo keitimas', price: 50 },
    ],
  },
  {
    title: 'Užtrauktukų keitimas',
    items: [
      { name: 'Žieminės striukės užtrauktuko keitimas', price: 25 },
      { name: 'Plonos striukės užtrauktuko keitimas', price: 20 },
      { name: 'Vaikiškos striukės užtrauktuko keitimas', price: 15 },
      { name: 'Džinsų užtrauktuko keitimas', price: 10 },
      { name: 'Sijono užtrauktuko keitimas', price: 10 },
      { name: 'Vyr. kelnių užtrauktuko keitimas', price: 15 },
      { name: 'Puspalčio užtrauktuko keitimas', price: 25 },
      { name: 'Palto užtrauktuko keitimas', price: 30 },
    ],
  },
];

// 10 -> "10€", [15, 20] -> "15-20€"
export const formatPrice = (price: Price) =>
  Array.isArray(price) ? `${price[0]}-${price[1]}€` : `${price}€`;
