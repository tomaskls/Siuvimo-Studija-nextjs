import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing5() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Suknelės siuvimo paslauga</h3>
                    <p className={style.p}>Ši elegantiška suknelė pasiūta iš natūralaus lino audinio, dekoruota subtiliais nėriniais, kurie prideda romantikos ir išskirtinumo.</p>
                    <Image className={style.img}
                        src="/imgGallery/linine_suknele.webp"
                        alt="linine suknele"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Sijonkelnių siuvimo paslauga</h3>
                    <p className={style.p}>Šios elegantiškos sijonkelnes yra pasiūtos iš aukštos kokybės eko odos. Ryškiai mėlyna spalva suteikia išskirtinumo, o platus klostuotas siluetas leidžia jaustis laisvai ir patogiai.</p>
                    <Image className={style.img2}
                        src="/imgGallery/eko_odos_sijonkelnes.webp"
                        alt="eko odos sijonkelnes"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}