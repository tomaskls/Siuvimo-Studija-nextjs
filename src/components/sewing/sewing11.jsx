import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing11() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Odinis sijonas </h3>
                    <p className={style.p}>Funkcionalus siuvimas.</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/IMG_20260203_181518.webp"
                        alt="odinis sijonas"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Eksliuzivyniai rūbai</h3>
                    <p className={style.p}>Klasikinio audinio švarkelis, dekoruotas rankų darbo aplikacijomis.</p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/IMG_20260304_170627.webp"
                        alt="Eksliuzivyniai rūbai"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}