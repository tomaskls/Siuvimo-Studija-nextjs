import React from 'react';
import { Zirkles, Adata } from '../../components/svg';
import style from './Sewing.module.css';
import Image from 'next/image';
import { Metadata } from 'next';
import Sewing1 from "../../components/sewing/liemene";
import Sewing2 from "../../components/sewing/suknele";
import Sewing3 from '../../components/sewing/sukneles2';
import Sewing4 from '../../components/sewing/sukneles3';
import Sewing5 from '../../components/sewing/sukneles4';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Siuvykla Šiauliuose",
    description: "Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.",
    openGraph: {
        title: 'Siuvykla Šiauliuose',
        description: 'Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.Stilingi ir kokybiški drabužiai už patrauklią kainą.',
        url: 'https://www.neringos-siuvimo-studija.lt/siuvykla',
        siteName: 'Neringos Siuvimo Studija',
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/Images/rubu_siuvimas_900.webp', // Pakeiskite į savo paveikslėlio adresą
                width: 900,
                height: 1352,
            },
        ],
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/siuvykla',
    }
};

export default function Sewing() {
    return (
        <>
            <div className={style.container}>
                <Image className={style.img}
                    src="/Images/rubu_siuvimas_900.webp"
                    alt="Siuvykla Šiauliuose"
                    width={900}
                    height={1350}
                    priority={true}
                />
                <div className={style.content}>
                    <h1 className={style.h2}>Ateik su idėja, išeik su drabužiu!</h1>
                    <p className={style.p}>Kiekvienas turi savo unikalų stilių, bet ne visada lengva jį rasti parduotuvėje. Čia mes įžengiame į žaidimą - siuvame pagal jūsų norus ir poreikius. Nesvarbu, ar tai būtų kostiumas su per dideliais atlapais, suknelė, kuri privers suktis galvas kiekviename žingsnyje, ar džemperis, kuriame norėtumėt praleisti visą žiemą, mes pasirūpinsime, kad tai taptų realybe.</p>
                    <ul className={style.repairList}>
                        <li>Moteriškų drabužių siuvimas</li>
                        <li>Vyriškų drabužių siuvimas</li>
                        <li>Vaikiškų drabužių siuvimas</li>
                    </ul>
                    <div className={style.svg}><Zirkles /></div>
                </div>
            </div>
            <div className={`${style.container} ${style.container2}`}>
                <Image className={style.img2}
                    src="/Images/design_900.webp"
                    alt="Suknele su aplikacija"
                    width={900}
                    height={1718}
                    priority={false}
                />
                <div className={style.content}>
                    <h2 className={style.h2}>Modeliavimas išskirtiniai drabužiai jums</h2>
                    <p className={style.p}>„Nuo idėjos iki podiumo - mūsų modeliavimo paslaugos jūsų sėkmei!“ Ieškote tobulo drabužio, bet nerandate jo parduotuvėje? Laikas sukurti jį patiems! Mūsų modeliavimo paslauga leis jums realizuoti savo kūrybines vizijas ir sukurti drabužį, kuris bus unikalus, stilingas ir puikiai pritaikytas būtent jums.</p>
                    <div className={style.svg} ><Adata /></div>
                </div>
            </div>
        <h2 className={style.darbu}>Darbų pavyzdžiai</h2>

                <Sewing5 />
                <Sewing4 />
                <Sewing1 />
                <Sewing2 />
                <Sewing3 />
                <div className={style.link}>
            <span>Daugiau pavyzdžių rasite čia &gt;</span>
        <Link  href="/gallery" legacyBehavior>
            <a><button className={style.button}>Galerija</button></a>
          </Link>
          </div>
        </>
    );
}
