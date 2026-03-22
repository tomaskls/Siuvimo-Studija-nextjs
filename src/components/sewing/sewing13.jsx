import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing13() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Liemenė</h3>
                    <p className={style.p}>Individualus užsakymas, modernus dizainas, originalios sagos.</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/IMG20251205100602.webp"
                        alt="liemenė"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Puošnios rankovės</h3>
                    <p className={style.p}>Rankovės gali būti pritaikytos prie įvairių rūbų.</p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/IMG20260309163832.webp"
                        alt="rankovės"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}