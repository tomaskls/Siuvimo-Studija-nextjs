import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing21() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topText}>
                    <h3 className={style.h4}>✨ Gipiūrinė palaidinė</h3>
                    <p className={style.p}>Individualus užsakymas teminiam vakarėliui.</p>
                </div>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/siuvineta-palaidine-su-rozemis.webp"
                        alt="Gipiūrinė palaidinė su raudonomis rožėmis ir juodos plačios kelnės"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/siuvineta-palaidine-rankoves-detale.webp"
                        alt="Gipiūrinės palaidinės rankovė su banguotu kraštu iš arti"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
