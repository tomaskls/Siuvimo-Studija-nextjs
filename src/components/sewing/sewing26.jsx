import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing26() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topText}>
                    <h3 className={style.h4}>✨ Modernus trijų dalių kostiumėlis</h3>
                    <p className={style.p}>Plačios kelnės ir liemenė, stilingas bomberis.</p>
                </div>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/smelio-kostiumelis-su-svarkeliu.webp"
                        alt="Smėlio spalvos trijų dalių kostiumėlis: bomberis, liemenė ir plačios kelnės"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/smelio-liemene-ir-placios-kelnes.webp"
                        alt="Smėlio spalvos kostiumėlio liemenė ir plačios kelnės"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
