import style from './Product.module.css';
import React from 'react';
import { Smasina } from '../../components/svg';
import { Picture1, Picture2, Picture3, Picture4, Picture5, PictureMain } from './ProductPictures';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Šilti flisiniai džemperiai",
    description: "Sušilkite stilingai su unikaliais, pagal užsakymą siuvamais flisiniais džemperiais Šiauliuose! Rinkitės ir pritaikykite dydį, spalvą ir detales. Užsisakykite ir mėgaukitės šiluma!",
    openGraph: {
        title: 'Šilti flisiniai džemperiai',
        description: 'Sušilkite stilingai su unikaliais, pagal užsakymą siuvamais flisiniais džemperiais Šiauliuose! Rinkitės ir pritaikykite dydį, spalvą ir detales. Užsisakykite ir mėgaukitės šiluma!', // Sutampa su pagrindiniu description
        url: 'https://www.neringos-siuvimo-studija.lt/flisiniai-dzemperiai',
        siteName: 'Neringos Siuvimo Studija',
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/images/siltas_flisinis_dzemperis_900.webp', // Pakeiskite į savo paveikslėlio adresą
                width: 900,
                height: 1352,
            },
        ],
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/flisiniai-dzemperiai',
    }
};

export default function Product() {
    return (
        <>
            <div id='flisiniai-dzemperiai' className={style.container}>
                <div>
                    <PictureMain />
                </div>
                <div className={style.contentNewItems}>
                    <h1 className={style.h2}>Tapk savo džemperio dizaineriu!</h1>
                    <p className={style.p}>Po kelionių per ledinius kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio!</p>
                    <div className={style.svg}><Smasina /></div>
                </div>
            </div>
            <div className={style.fotoContainer}>
                <Picture1 />
                <Picture2 />
                <Picture3 />
                <Picture4 />
                <Picture5 />
            </div>
        </>
    );
}
