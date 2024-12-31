import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair6() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>🔄 Užtrauktuko keitimo paslauga</h3>
            <p className={style.p}>Pūkinės striukės užtrauktukas pakeistas nauju, specialiai pritaikytu storiems pūkiniams drabužiams. Užtikrintas patikimas užsegimas ir šilumos išlaikymas, išvengiant pūkų prasiskverbimo.</p>
            <Image className={style.img}
                src="/Images/striukes_uztrauktuko_keitimas.webp"
                alt="striukės užtrauktuko keitimo etapai"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}