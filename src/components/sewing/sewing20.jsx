import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing20() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/Images/2026/IMG20260804140259.webp"
                        alt="Žalia ilga suknelė su ornamento aplikacija"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260804140627.webp"
                        alt="Žalia ilga suknelė su ornamentu, vaizdas iš nugaros"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}