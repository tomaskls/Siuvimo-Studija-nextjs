import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing12() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Proginis kostiumėlis</h3>
                    <p className={style.p}>Kostiumėlis su plačiomis kelnėmis.</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/IMG_20260308_194120.webp"
                        alt="Proginis kostiumėlis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Suknelė</h3>
                    <p className={style.p}>Tvarus siuvimas. </p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/IMG20250616163816.webp"
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