import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair14() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Palto rankovių trumpinimas</h3>
            <p className={style.p}>Sutrumpintos palto rankovės</p>
            <Image className={style.img}
                src="/imgGallery/1000005279.webp"
                alt="palto_rankoviu_trumpinimas"
                width={900}
                height={1186}
                priority={false}
            />
        </div>
    )
}