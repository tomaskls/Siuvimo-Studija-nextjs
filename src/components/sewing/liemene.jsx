import React from 'react';
import style from './liemene.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Sewing1() {
    return (
        <>
        <h2 className={style.darbu}>Darbų pavyzdžiai</h2>
        <div className={style.container}>
            <div className={style.content}>
                <h3 className={style.h3}>Liemenes kontravimas ir pasiūta liemenė</h3>
                <Image className={style.img}
                    src="/imgGallery/liemenes_konstravimas.webp"
                    alt="Palto rankoviu trumpinimas"
                    width={900}
                    height={1200}
                    priority={false}
                />
            </div>
            <div >
                <h2>artisas</h2>
                <Image className={style.img2}
                    src="/imgGallery/liemene.webp"
                    alt="Palto rankoviu trumpinimas"
                    width={450}
                    height={800}
                    priority={false}
                />
            </div>
        </div>
        <div className={style.link}>
            <span>Daugiau pavyzdžių rasite čia &gt;</span>
        <Link  href="/gallery" legacyBehavior>
            <a><button className={style.button}>Galerija</button></a>
          </Link>
          </div>
        </>
    )
}