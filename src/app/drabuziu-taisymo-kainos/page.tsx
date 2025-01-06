import { Siulai } from '../../components/svg';
import style from './Price.module.css'
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { priceListSchema } from '../../../schemas/prices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: "Drabužių taisymo kainos Šiauliuose",
    description: "Greitas ir profesionalus drabužių taisymas Šiauliuose. Kelnių palenkimas, užtrauktukų keitimas, siuvimas ir taisymas - konkurencingomis kainomis.",
    openGraph: {
        title: 'Drabužių taisymo kainos Šiauliuose',
        description: 'Greitas ir profesionalus drabužių taisymas Šiauliuose. Kelnių palenkimas, užtrauktukų keitimas, siuvimas ir taisymas - konkurencingomis kainomis. Peržiūrėkite mūsų kainoraštį!',
        url: 'https://www.neringos-siuvimo-studija.lt/drabuziu-taisymo-kainos',
        siteName: 'Neringos Siuvimo Studija',
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/imgGallery/pakabos.webp',
                width: 1800,
                height: 1200,
            },
        ],
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/drabuziu-taisymo-kainos',
    }
};

export default function Prices() {
    return (
        <>
        <head>
        <JsonLd data={priceListSchema} />

        </head>
        <div className={style.container}>
            <div className={style.content1}>
                <Image className={style.img}
                    src="/Images/pakabos.webp"
                    alt="Pakabos su užrašu Neringos Siuvimo Studija"
                    width={1120}
                    height={750}
                    priority={true}
                />
                <div className={style.content}>
                    <h1 className={style.h2}>Drabužių taisymo darbų kainoraštis</h1>
                    <div className={style.list}>
                        <h3 className={style.h3}>Kelnių trumpinimas :</h3>
                        <p className={style.p}>Džinsų trumpinimas - 10€</p>
                        <p className={style.p}>Kelnių trumpinimas mašina - 10€</p>
                        <p className={style.p}>Kelnių trumpinimas su juostele - 12€</p>
                        <p className={style.p}>Kelnių trumpinimas su atvartais - 10€</p>
                        <p className={style.p}>Sportiniu kelnių su užtrauktukais - 12€</p>
                        <p className={style.p}>Kelnių trumpinimas paslėptu dygsniu - 10€</p>
                        <p className={style.p}>Kelnių siaurinimas per liemenį - 15-20€</p>
                        <p className={style.p}>Kelnių siaurinimas - 20-30€</p>
                    </div>
                </div>
            </div>
            <div className={style.content2}>
                <div className={style.list}>
                    <h3 className={style.h3}>Sijonų taisymas :</h3>
                    <p className={style.p}>Sijono trumpinimas - 10-15€</p>
                    <p className={style.p}>Sijono trumpinimas su pamušalu - 12-15€</p>
                    <p className={style.p}>Sijono siaurinimas - 15€</p>
                    <p className={style.p}>Sijono siaurinimas su pamušalu - 20€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Švarkų taisymas:</h3>
                    <p className={style.p}>Švarko siaurinimas (1 siūlė)- 8€</p>
                    <p className={style.p}>Švarko apačios trumpinimas - 15-20€</p>
                    <p className={style.p}>Švarko rankovių trumpinimas - 15€</p>
                    <p className={style.p}>Švarko rankovių perstatymas - 20€</p>
                    <p className={style.p}>Švarko su pamušalu siaurinimas (1 siūlė) - 10€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Suknelių taisymas :</h3>
                    <p className={style.p}>Suknelės siaurinimas per šonines siūles - 20€</p>
                    <p className={style.p}>Suknelės apačios lenkimas - 15€</p>
                    <p className={style.p}>Suknelės plačia apačia su pamušalu trumpinimas - 20€</p>
                    <p className={style.p}>Suknelės petnešų trumpinimas - 10€</p>
                    <p className={style.p}>Suknelės rankovių trumpinimas - 10€</p>
                    <p className={style.p}>Suknelės rankovių perstatymas - 15€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Vyr. kostiumų taisymas:</h3>
                    <p className={style.p}>Vyr. švarko siaurinimas - 20€</p>
                    <p className={style.p}>Vyr. švarko rankovių trumpinimas - 25€</p>
                    <p className={style.p}>Vyr. švarko apačios trumpinimas - 20€</p>
                    <p className={style.p}>Vyr. švarko rankovių perstatymas - 40€</p>
                    <p className={style.p}>Kelnių apačios lenkimas su juostele - 12€</p>
                    <p className={style.p}>Kelnių siaurinimas - 20-40€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Paltų taisymas:</h3>
                    <p className={style.p}>Palto apačios lenkimas - 30€</p>
                    <p className={style.p}>Palto rankovių trumpinimas - 20€</p>
                    <p className={style.p}>Palto rankovių perstatymas - 30€</p>
                    <p className={style.p}>Palto siaurinimas - 20-40 €</p>
                    <p className={style.p}>Palto apykaklės persiuvimas - 20€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Pamušalų keitimas:</h3>
                    <p className={style.p}>Palto pamušalo keitimas - 35€</p>
                    <p className={style.p}>Puspalčio pamušalo keitimas - 30€</p>
                    <p className={style.p}>Švarko pamušalo keitimas - 30€</p>
                    <p className={style.p}>Sijono pamušalo keitimas - 15€</p>
                    <p className={style.p}>Suknelės pamušalo keitimas - 15€</p>
                    <p className={style.p}>Striukės pamušalo keitimas - 25-35€</p>
                    <p className={style.p}>Kailinių pamušalo keitimas - 50€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Užtrauktukų keitimas:</h3>
                    <p className={style.p}>Žieminės striukės užtrauktuko keitimas - 25€</p>
                    <p className={style.p}>Plonos striukės užtrauktuko keitimas- 20€</p>
                    <p className={style.p}>Vaikiškos striukės užtrauktuko keitimas - 15€</p>
                    <p className={style.p}>Džinsų užtrauktuko keitimas - 10€</p>
                    <p className={style.p}>Sijono užtrauktuko keitimas - 10€</p>
                    <p className={style.p}>Vyr. kelnių užtrauktuko keitimas - 15€</p>
                    <p className={style.p}>Puspalčio užtrauktuko keitimas - 25€</p>
                    <p className={style.p}>Palto užtrauktuko keitimas - 30€</p>
                </div>
                <div className={style.svg}><Siulai /></div>
            </div>
        </div>
    </>
    )
}