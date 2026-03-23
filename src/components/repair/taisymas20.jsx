import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair20() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Proginis kostiumėlis  </h3>
            <p className={style.p}>Sumažinta pažastis, iš tokios pat spalvos pasiūtos rankovės.</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG_20260220_075355.webp"
                alt="Proginis kostiumėlis"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}