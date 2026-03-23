import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair23() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Puspaltis</h3>
            <p className={style.p}>Pritaikyta kailinė apykaklė</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG20251110145415.webp"
                alt="Vyriško klasikinio kostiumo taisymas"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}