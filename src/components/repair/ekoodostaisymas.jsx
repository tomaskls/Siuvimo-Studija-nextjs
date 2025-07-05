import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair11() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Eko odos striukės rankovių trumpinimas</h3>
            <p className={style.p}>Sutrumpintos striukės rankovės</p>
            <Image className={style.img}
                src="/imgGallery/eko_odos_taisymas.webp"
                alt="eko_odos_taisymas"
                width={900}
                height={1186}
                priority={false}
            />
        </div>
    )
}