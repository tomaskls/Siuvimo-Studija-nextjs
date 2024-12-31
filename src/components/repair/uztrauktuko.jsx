import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair2() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>🔄 Užtrauktuko keitimo paslauga</h3>
            <p className={style.p}>Subtiliai, bet kokybiškai atliktas paslėpto užtrauktuko keitimas kelnėse. Užtrauktukas integruotas taip, kad išliktų nepastebimas, bet funkcionalus.</p>
            <Image className={style.img}
                src="/Images/uztrauktuku_taisymas.webp"
                alt="užtrauktukų keitimas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}