import React from 'react';
import style from './sewing.module.css';
import Image from 'next/image';

export default function Sewing17() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Viskozinė palaidinė ir languotos kelnės</h3>
                    <Image className={style.img}
                        src="/Images/2026/IMG20260629103856.webp"
                        alt="Alyvuogių spalvos palaidinė ir languotos kelnės, vaizdas iš šono"
                        width={900}
                        height={2100}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Lininė suknelė su aplikacija</h3>
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260701100549.webp"
                        alt="Pilka ilga suknelė su nėrinių aplikacija ant peties"
                        width={900}
                        height={2100}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}