import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair18() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Vakarinė suknelė</h3>
            <p className={style.p}>Paukštinta pečių linija, sutvarkyti iširę karoliukai (rankų darbas)</p>
            <Image className={style.img}
                src="/imgGallery/2026/IMG_20251204_103145.webp"
                alt="Vakarinė suknelė"
                width={900}
                height={1200}
                priority={false}
            />
        </div>
    )
}