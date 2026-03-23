import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair21() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Modernus švarkas </h3>
            <p className={style.p}>Pasiaurintas švarkas,paryškinant figūrą.</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG_20260223_114453.webp"
                alt="Modernus švarkas"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}