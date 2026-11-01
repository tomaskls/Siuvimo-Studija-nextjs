import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing24() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/rusvai-raudona-marskiniu-suknele.webp"
                        alt="Rusvai raudona marškinių tipo suknelė su diržu"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/lekalai-ant-audinio.webp"
                        alt="Lekalų kontūrai ant rudo audinio ir matavimo juostos"
                        width={900}
                        height={1601}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
