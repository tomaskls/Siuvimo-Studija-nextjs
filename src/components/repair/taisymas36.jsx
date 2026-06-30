import React from 'react';
import style from './proginiu.module.css';
import Image from 'next/image';


export default function Repair36() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Vestuvinių suknelių taisymas </h3>
            <Image className={style.img}
                src="/imgGallery/2026/IMG20260629100251.webp"
                alt="Vestuvinių suknelių taisymas"
                width={537}
                height={1200}
                priority={false}
            />
        </div>
    )
}