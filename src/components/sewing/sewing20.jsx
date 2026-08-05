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
                        alt="Proginis kostiumėlis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260804140627.webp"
                        alt="suknelė"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}