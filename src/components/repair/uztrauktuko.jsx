import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair2() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>Užtrauktuko keitimas</h3>
            <Image className={style.img}
                src="/Images/rankoviu_trumpinimas.webp"
                alt="Palto rankoviu trumpinimas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}