import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing22() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/ilga-suknele-su-neriniu-apykakle.webp"
                        alt="Ilga rudai raudona suknelė su juodų nėrinių apykakle ir rankogaliais"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/suknele-su-neriniais-detale.webp"
                        alt="Suknelės rankovė su nėrinių rankogaliu ir nėrinių apykaklė iš arti"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
