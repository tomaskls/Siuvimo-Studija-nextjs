import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair19() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Demisezoninis paltas</h3>
            <p className={style.p}>Patrumpintas paltas 10cm.</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG_20260210_214228.webp"
                alt="Demisezoninis paltas"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}