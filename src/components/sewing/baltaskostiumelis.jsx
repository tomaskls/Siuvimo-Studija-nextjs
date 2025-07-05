import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing6() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Kostiumėlio siuvimas</h3>
                    <p className={style.p}>Pasiūtas proginis kostiumėlis. Panaudotos skirtingų faktūrų medžago, to paties atspalvio.</p>
                    <Image className={style.img}
                        src="/imgGallery/Baltas_kostiumelis.webp"
                        alt="baltas kostiumelis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Dvisluoksnės kelnės</h3>
                    <p className={style.p}>Iš dviejų rušių audinių pasiūtos kelnės, suderinus audinių kritimą.</p>
                    <Image className={style.img2}
                        src="/imgGallery/dvisluoksnes_kelnes.webp"
                        alt="dvisluoksnes kelnes"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}