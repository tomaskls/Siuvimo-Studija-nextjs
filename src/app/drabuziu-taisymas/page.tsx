import React from 'react';
import { Siulai, ScissorsIcon } from '../../components/svg';
import style from './Repair.module.css';
import Image from 'next/image';
import { Metadata } from 'next';

import Link from 'next/link';
import WorkExamples from '../../components/works/WorkExamples';
import { repairWorks } from '../../components/repair/repairWorks';


export const metadata: Metadata = {
    title: "Rūbų remonto dirbtuvės | Drabužių taisykla Šiauliuose",
    description: "Profesionalus drabužių taisymas Šiauliuose. Trumpiname, ilginame, siauriname, keičiame užtrauktukus ir atliekame kitus remonto darbus. Užsukite!",
    openGraph: {
        title: 'Rūbų remonto dirbtuvės',
        description: 'Profesionalus drabužių taisymas Šiauliuose. Trumpiname, ilginame, siauriname, keičiame užtrauktukus ir atliekame kitus remonto darbus. Užsukite ir suteikite savo drabužiams antrą gyvenimą!',
        url: 'https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas',
        siteName: 'Neringos Siuvimo Studija',
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/Images/rubu_taisymas_900.jpg',
                width: 900,
                height: 1352,
                alt: 'Rūbų taisymas'
            },
        ],
        locale: 'lt_LT'
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas',
    }
};

export default function Repair() {
    return (
        <>
            <div className={style.container}>
                <Image className={style.img}
                    src="/Images/rubu_taisymas_900.webp"
                    alt="Drabužių taisymas Šiauliuose"
                    width={900}
                    height={1350}
                    priority={true}
                />
                <div className={style.content}>
                    <h1 className={style.h2}>Rūbų taisymas</h1>
                    <p className={style.p}>Ar Jūsų mėgstamiausia suknelė prarado būrį sagų? O gal madingos kelnytės tapo per ilgos? Mūsų drabužių taisymas – tai lyg stebuklų dirbtuvės Jūsų spintai! Ateikite pas mus – bet kokį „oops“ paversime „wow“!</p>
                    <ul className={style.repairList}>
                        <li><ScissorsIcon /> Drabužių taisymas ir pritaikymas</li>
                        <li><ScissorsIcon /> Kelnių trumpinimas/pailginimas</li>
                        <li><ScissorsIcon /> Užtrauktukų keitimas</li>
                        <li><ScissorsIcon /> Sagų įsiuvimas</li>
                        <li><ScissorsIcon /> Odinių rūbų taisymas</li>
                        <li><ScissorsIcon /> Sijonų ir suknelių trumpinimas/pailginimas</li>
                        <li><ScissorsIcon /> Drabužių siaurinimas/praplatinimas</li>
                        <li><ScissorsIcon /> Pamušalo keitimas</li>
                        <li><ScissorsIcon /> Džinsų lopymas</li>
                        <li><ScissorsIcon /> Rankovių trumpinimas/pailginimas</li>
                        <li><ScissorsIcon /> Uniformų ir darbo drabužių taisymas</li>
                        <li><ScissorsIcon /> Proginių drabužių taisymas</li>
                        <li><ScissorsIcon /> Striukių ir paltų taisymas</li>
                    </ul>
                    <div className={style.svg}><Siulai /></div>
                </div>
            </div>
            <h2 className={style.darbu}>Darbų pavyzdžiai</h2>
            <WorkExamples works={repairWorks} initialCount={15} photoRatio="2 / 3" />
            <div className={style.dukContainer}>
    <p>Turite klausimų?</p>
    <p>Skambinkite: <a className={style.phone} href="tel:+37060055316">+370 600 55316</a></p>
    <p>Taip pat galite peržiūrėti</p>
         <Link href="/duk">
        <button className={style.button}>Dažnai užduodamus klausimus</button>
    </Link>
</div>
        </>
    );
}