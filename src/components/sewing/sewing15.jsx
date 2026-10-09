import React from 'react';
import style from './sewing.module.css';
import Image from 'next/image';

export default function Sewing15() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Išskirtinio rašto lininis kostiumėlis</h3>
                    <Image className={style.img}
                        src="/Images/2026/IMG20260529173709.webp"
                        alt="Šviesi palaidinė su gumele ir plačios kelnės"
                        width={900}
                        height={2100}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Viskozinė suknelė</h3>
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260615092808.webp"
                        alt="Ilga raštuota suknelė be rankovių"
                        width={900}
                        height={2100}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}