import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing23() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/pilkai-melynas-kostiumas.webp"
                        alt="Pilkai mėlynas kostiumas: švarkas ir plačios kelnės"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/violetine-suknele.webp"
                        alt="Violetinė laisvo kirpimo suknelė"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
