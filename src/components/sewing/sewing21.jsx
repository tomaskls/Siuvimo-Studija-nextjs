import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing21() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/siuvineta-palaidine-su-rozemis.webp"
                        alt="Permatoma siuvinėta palaidinė su raudonomis rožėmis ir juodos plačios kelnės"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/siuvineta-palaidine-rankoves-detale.webp"
                        alt="Siuvinėtos palaidinės rankovė su raudonomis rožėmis iš arti"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
