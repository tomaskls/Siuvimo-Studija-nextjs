import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair12() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Proginių suknelių taisymas</h3>
            <p className={style.p}>Suknelė susiaurinta per šonines siūles, pakoreguotos pūstos ranlovės pečių srityje. </p>
            <Image className={style.img}
                src="/imgGallery/proginiu_sukneliu_taisymas.webp"
                alt="proginiu sukneliu taisymas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}