import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing7() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Šilkinė palaidinė</h3>
                    <p className={style.p}>Dryžuoto šilko palaidinė.</p>
                    <Image className={style.img}
                        src="/imgGallery/silkine_palaidine.webp"
                        alt="silkine palaidine"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Šilkinis sijonas</h3>
                    <p className={style.p}>Iš aukštos kokybės &#34;digital&#34; šilko pasiūtas sijonas. </p>
                    <Image className={style.img2}
                        src="/imgGallery/silkinis_sijonas.webp"
                        alt="silkinis sijonas"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}