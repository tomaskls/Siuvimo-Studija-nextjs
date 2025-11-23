import React from 'react';
import style from './sewing8.module.css';
import Image from 'next/image';

export default function Sewing9() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Tautinių rūbų siuvimas</h3>
                    <p className={style.p}>Plonos vilnos suknelė, pagal kliento nuotrauką</p>
                    <Image className={style.img}
                        src="/imgGallery/1000005211.webp"
                        alt="Tautinių rūbų siuvimas"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Laisvalaikio rūbai</h3>
                    <p className={style.p}>Trikotažinis džemperis</p>
                    <Image className={style.img2}
                        src="/imgGallery/1000005316.webp"
                        alt="Trikotažinis džemperis"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}