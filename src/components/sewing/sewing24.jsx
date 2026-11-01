import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing24() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topText}>
                    <h3 className={style.h4}>✨ Itališkos vilnos suknelė</h3>
                    <p className={style.p}>Sodrios plytinės spalvos elegantiško silueto suknelė.</p>
                </div>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/rusvai-raudona-marskiniu-suknele.webp"
                        alt="Plytinės spalvos itališkos vilnos marškinių tipo suknelė su diržu"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/lekalai-ant-audinio.webp"
                        alt="Plytinės spalvos itališkos vilnos audinys su lekalų kontūrais ir matavimo juostos"
                        width={900}
                        height={1601}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
