import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair6() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>Striukės užtrauktuko keitimas</h3>
            <Image className={style.img}
                src="/Images/striukes_uztrauktuko_keitimas.webp"
                alt="striukės užtrauktuko keitimo etapai"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}