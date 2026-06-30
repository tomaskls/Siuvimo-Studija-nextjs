import React from 'react';
import style from './proginiu.module.css';
import Image from 'next/image';


export default function Repair27() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Proginių suknelių taisymas,trumpinimas,siaurinimas </h3>
            <Image className={style.img}
                src="/imgGallery/2026/IMG20260615145653.webp"
                alt="Proginių suknelių taisymas,trumpinimas,siaurinimas"
                width={537}
                height={1200}
                priority={false}
            />
        </div>
    )
}