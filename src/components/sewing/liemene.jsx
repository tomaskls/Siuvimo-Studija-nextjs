import React from 'react';
import style from './liemene.module.css';
import Image from 'next/image';

export default function Sewing1() {
    return (
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h3 className={style.h3}>✨ Liemenės siuvimo paslauga</h3>
                <p className={style.p}>Pagal kliento išmatavimus sukonstruota ir pasiūta originali liemenė. Kruopščiai parinktos medžiagos ir pritaikytas dizainas užtikrina tobulą gulėjimą.</p>
                <Image className={style.img}
                    src="/imgGallery/liemenes_konstravimas.webp"
                    alt="Palto rankoviu trumpinimas"
                    width={900}
                    height={1200}
                    priority={false}
                />
            </div>
            <div >
                <Image className={style.img2}
                    src="/imgGallery/liemene.webp"
                    alt="Palto rankoviu trumpinimas"
                    width={450}
                    height={800}
                    priority={false}
                />
            </div>
        </div>
        
        </>
    )
}