import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair4() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✨ Suknelės modeliavimo paslauga</h3>
            <p className={style.p}>Suknelė pritaikyta pagal kliento figūrą - sutrumpinta ir susiaurinta idealiam siluetui. Išlaikytos originalios suknelės linijos ir dizaino elementai.</p>
            <Image className={style.img}
                src="/Images/Sukneles_trumpinimas_siaurinimas.webp"
                alt="Suknelės trumpinimo procesas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}