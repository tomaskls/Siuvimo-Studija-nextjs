import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair10() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Džinsų_trumpinimas</h3>
            <p className={style.p}>Džinsai patrumpinti, pritaikant originalios spalvos siūlus</p>
            <Image className={style.img}
                src="/imgGallery/dzinsu_trumpinimas.webp"
                alt="dzinsu_trumpinimas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}