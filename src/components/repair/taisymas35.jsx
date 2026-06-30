import React from 'react';
import style from './proginiu.module.css';
import Image from 'next/image';


export default function Repair35() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Vestuvinių suknelių taisymas</h3>
            <Image className={style.img}
                src="/imgGallery/2026/IMG_20250812_090016.webp"
                alt="Vestuvinių suknelių taisymas"
                width={537}
                height={1200}
                priority={false}
            />
        </div>
    )
}