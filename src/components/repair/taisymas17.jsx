import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair17() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Proginė suknelė</h3>
            <p className={style.p}>Proginės suknelės trumpinimas ir siaurinimas</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG_20251202_155745.webp"
                alt="Proginė suknelė"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}