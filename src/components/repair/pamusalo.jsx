import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair7() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✨ Pamušalo įsiuvimas</h3>
            <p className={style.p}>Į kailinius įsiutas  pamušalas. Suteikiantis papildomą šilumą</p>
            <Image className={style.img}
                src="/Images/pamusalo_keitimas.webp"
                alt="Pamušalo įsiuvimas i kailinius"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}