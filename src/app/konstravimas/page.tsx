import React from 'react';
import { Adata, ScissorsIcon } from '../../components/svg';
import style from './Construction.module.css';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import WorkExamples from '../../components/works/WorkExamples';
import { constructionWorks } from '../../components/construction/constructionWorks';
import { business } from '../../data/business';

export const metadata: Metadata = {
    title: "Drabužių konstravimas Šiauliuose – vienetiniai lekalai",
    description: "Drabužių konstravimas Šiauliuose: vienetiniai lekalai pagal Jūsų išmatavimus, modeliavimas pagal eskizą ar nuotrauką, konstrukcijos pritaikymas nestandartinei figūrai.",
    openGraph: {
        title: 'Drabužių konstravimas Šiauliuose',
        description: 'Vienetiniai lekalai pagal Jūsų išmatavimus, modeliavimas pagal eskizą ar nuotrauką, konstrukcijos pritaikymas nestandartinei figūrai. Pirminė konsultacija – nemokama.',
        url: 'https://www.neringos-siuvimo-studija.lt/konstravimas',
        siteName: 'Neringos Siuvimo Studija',
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/Images/lekalu_konstravimas_900.webp',
                width: 900,
                height: 1350,
            },
        ],
        locale: 'lt_LT'
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/konstravimas',
    }
};

export default function Construction() {
    return (
        <>
            <div className={style.container}>
                <Image className={style.img}
                    src="/Images/lekalu_konstravimas_900.webp"
                    alt="Permatomi lekalai, išdėlioti ant oranžinio audinio"
                    width={900}
                    height={1350}
                    priority={true}
                />
                <div className={style.content}>
                    <h1 className={style.h2}>Drabužių konstravimas</h1>
                    <p className={style.p}>Kiekvienas gerai pasiūtas drabužis prasideda nuo tikslios konstrukcijos. Pagal Jūsų išmatavimus nubraižome drabužio brėžinį, sumodeliuojame detales ir pagaminame vienetinius lekalus, pagal kuriuos kerpamas audinys. Taip sukonstruotas drabužis atkartoja Jūsų figūros ypatumus, todėl gerai guli ir yra patogus dėvėti.</p>
                    <ul className={style.list}>
                        <li><ScissorsIcon /> Vienetinių lekalų konstravimas pagal išmatavimus</li>
                        <li><ScissorsIcon /> Modeliavimas pagal eskizą ar nuotrauką</li>
                        <li><ScissorsIcon /> Lekalai pagal mėgstamą drabužį</li>
                        <li><ScissorsIcon /> Konstrukcijos pritaikymas nestandartinei figūrai</li>
                        <li><ScissorsIcon /> Konstrukcijos koregavimas po pasimatavimo</li>
                    </ul>
                    <div className={style.svg}><Adata /></div>
                </div>
            </div>
            <div className={style.steps}>
                <h2 className={style.h2}>Kaip vyksta darbas</h2>
                <ol>
                    <li><strong>Konsultacija.</strong> Aptariame modelį, audinį ir Jūsų pageidavimus. Atsineškite eskizą, nuotrauką ar patinkantį drabužį.</li>
                    <li><strong>Išmatavimai.</strong> Tiksliai išmatuojame figūrą.</li>
                    <li><strong>Konstrukcija.</strong> Pagal išmatavimus nubraižome drabužio brėžinį ir sumodeliuojame detales.</li>
                    <li><strong>Lekalai ir kirpimas.</strong> Iš brėžinio pagaminame lekalus, perkeliame juos ant audinio ir iškerpame detales.</li>
                    <li><strong>Pasimatavimas.</strong> Prireikus konstrukciją patiksliname, kad drabužis gulėtų nepriekaištingai.</li>
                </ol>
            </div>
            <h2 className={style.darbu}>Konstravimo darbai</h2>
            <WorkExamples works={constructionWorks} initialCount={8} photoRatio="9 / 16" />
            <div className={style.cta}>
                <p>Pirminė konsultacija – nemokama.</p>
                <p>Skambinkite: <a className={style.phone} href={`tel:${business.phone}`}>{business.phoneDisplay}</a></p>
                <Link href="/siuvykla">
                    <button className={style.button}>Siuvimo darbų pavyzdžiai</button>
                </Link>
            </div>
        </>
    );
}
