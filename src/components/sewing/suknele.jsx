import React from 'react';
import style from './suknele.module.css';
import Image from 'next/image';

export default function Sewing2() {
    return (
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h3 className={style.h3}>✨ Suknelės siuvimo paslauga</h3>
                <p className={style.p}>Elegantiška suknelė, pasiūta iš klasikinio vilnos audinio. Dizainą pabrėžia prabangios aukso spalvos sagos. Kiekviena detalė kruopščiai apgalvota, sukuriant klasikinį, bet kartu šiuolaikišką įvaizdį.</p>
                <Image className={style.img}
                    src="/Images/Suknele_dekoruota_aukso_spalvomis.webp"
                    alt="Suknelė dekoruota aukso spalvos sagomis"
                    width={900}
                    height={1337}
                    priority={false}
                />
            </div>
            <div >
                <Image className={style.img2}
                    src="/Images/Suknele_dekoruota_aukso_sagomis.webp"
                    alt="Suknelė dekoruota aukso spalvos sagomis"
                    width={900}
                    height={1600}
                    priority={false}
                />
            </div>
        </div>
        </>
    )
}