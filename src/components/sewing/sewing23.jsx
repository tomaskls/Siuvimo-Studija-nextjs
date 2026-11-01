import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing23() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Plonos vilnos kostiumėlis</h3>
                    <p className={style.p}>Plonos vilnos kostiumėlis su spalviškai priderintu šalikėliu (šalikas – vilna su šilku).</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/pilkai-melynas-kostiumas.webp"
                        alt="Pilkai mėlynas plonos vilnos kostiumėlis su vilnos ir šilko šalikėliu"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Klasikinio kirpimo suknelė</h3>
                    <p className={style.p}>Laisvo silueto suknelė didesniems dydžiams.</p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/violetine-suknele.webp"
                        alt="Violetinė klasikinio kirpimo laisvo silueto suknelė"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
