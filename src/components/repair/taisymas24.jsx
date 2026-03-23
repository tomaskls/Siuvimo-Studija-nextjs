import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair24() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Kailiniai</h3>
            <p className={style.p}>Patrumpintos rankovės,padaryta paildoma kilpa sagai, siūlių sutvirtinimas</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG20260121172501.webp"
                alt="Kailiniai"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}