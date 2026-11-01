import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing22() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topText}>
                    <h3 className={style.h4}>✨ Proginė suknelė</h3>
                    <p className={style.p}>Suknelė dvaro tematika su gipiūriniais aksesuarais.</p>
                </div>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/ilga-suknele-su-neriniu-apykakle.webp"
                        alt="Rudai raudona proginė suknelė dvaro stiliumi su juoda gipiūrine apykakle ir rankogaliais"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/suknele-su-neriniais-detale.webp"
                        alt="Proginės suknelės gipiūrinė apykaklė ir rankovė su gipiūriniu rankogaliu iš arti"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
