import React from 'react';
import style from './sewing8.module.css';
import Image from 'next/image';

export default function Sewing8() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Proginė suknelė</h3>
                    <p className={style.p}>Pagal klientės pateiktą nuotrauką, pasiūta suknelė. Pritaikyta klientės figūrai. </p>
                    <Image className={style.img}
                        src="/imgGallery/progine_suknele_juoda_balta.webp"
                        alt="Juodai balta proginė suknelė"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Lininiai drabužiai</h3>
                    <p className={style.p}>Laisvalaikio komplektas - Šortai ir &#34;bomberis&#34;.</p>
                    <Image className={style.img2}
                        src="/imgGallery/lininiai_drabuziai.webp"
                        alt="Lininiai drabužiai: kombinezonai su gėlių raštu"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}