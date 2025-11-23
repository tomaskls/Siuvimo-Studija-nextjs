import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair16() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Vyriško klasikinio kostiumo taisymas</h3>
            <p className={style.p}>Sutrumpintos švarko rankovės</p>
            <Image className={style.img}
                src="/Images/svarko.webp"
                alt="Vyriško klasikinio kostiumo taisymas"
                width={900}
                height={1187}
                priority={false}
            />
        </div>
    )
}