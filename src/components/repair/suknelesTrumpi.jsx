import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair4() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>Suknelės trumpinimas ir siaurinimas</h3>
            <Image className={style.img}
                src="/Images/Sukneles_trumpinimas_siaurinimas.webp"
                alt="Suknelės trumpinimo procesas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}