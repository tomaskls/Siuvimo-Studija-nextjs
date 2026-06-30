import React from 'react';
import style from './kostiumo.module.css';
import Image from 'next/image';


export default function Repair32() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Klasikinio kostiumo taisymas, rankovių trumpinimas, siaurinimas </h3>
            <Image className={style.img}
                src="/imgGallery/2026/IMG20260421153044.webp"
                alt="Klasikinio kostiumo taisymas, rankovių trumpinimas, siaurinimas"
                width={675}
                height={1200}
                priority={false}
            />
        </div>
    )
}