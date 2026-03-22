import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing10() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Palaidinė su šilko detalėmis</h3>
                    <p className={style.p}>Proginė palaidinė su šilkinėmis rankovėmis ir apykakle.</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/IMG_20250724_200643.webp"
                        alt="Palaidinė su šilko detalėmis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Puošni Palaidinė</h3>
                    <p className={style.p}>Laisvo kritimo palaidinė. </p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/IMG_20251209_182018.webp"
                        alt="Puošni Palaidinė"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}