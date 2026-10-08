import { Siulai } from '../../components/svg';
import style from './Price.module.css'
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { priceListSchema } from '../../../schemas/prices';
import { priceList, formatPrice, PriceSection } from '../../data/prices';

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

const [firstSection, ...otherSections] = priceList;

function PriceListSection({ section }: { section: PriceSection }) {
    return (
        <div className={style.list}>
            <h3 className={style.h3}>{section.title}:</h3>
            {section.items.map((item) => (
                <p key={item.name} className={style.p}>{item.name} - {formatPrice(item.price)}</p>
            ))}
        </div>
    );
}

export default function Prices() {
    return (
        <>
        <JsonLd data={priceListSchema} />
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
                    <PriceListSection section={firstSection} />
                </div>
            </div>
            <div className={style.content2}>
                {otherSections.map((section) => (
                    <PriceListSection key={section.title} section={section} />
                ))}
                <div className={style.svg}><Siulai /></div>
            </div>
        </div>
    </>
    )
}