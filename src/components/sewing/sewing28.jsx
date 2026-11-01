import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing28() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Klasikinis tvido švarkelis</h3>
                    <p className={style.p}>Modernus tvido švarkelis su metalo gijomis, puoštas metalinėmis sagomis.</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/tvido-svarkelis.webp"
                        alt="Šviesiai mėlynas tvido švarkelis su metalo gijomis ir metalinėmis sagomis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Lino komplektas</h3>
                    <p className={style.p}>Lininis sijonas ir palaidinė, dekoruota aplikacija.</p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/melyna-palaidine-su-ornamentu.webp"
                        alt="Lininis komplektas: mėlyna palaidinė su ornamento aplikacija ir šviesus sijonas"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
