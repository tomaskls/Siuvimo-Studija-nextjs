import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair25() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Odinė striukė </h3>
            <p className={style.p}>Rankovių trumpinimas.</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG20260312125337.webp"
                alt="Odinė striukė"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}