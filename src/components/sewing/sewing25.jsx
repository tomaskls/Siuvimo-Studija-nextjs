import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing25() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topText}>
                    <h3 className={style.h4}>✨ Suknelės ir švarko komplektas</h3>
                    <p className={style.p}>Proginis komplektas su išskirtinėmis rankovėmis, papuoštomis dekoratyvinėmis sagomis.</p>
                </div>
                <div className={style.content}>
                    <Image className={style.img}
                        src="/imgGallery/2026/pilkas-paltas.webp"
                        alt="Šviesiai pilkas proginis suknelės ir švarko komplektas"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/imgGallery/2026/pilkas-paltas-rankoves-detale.webp"
                        alt="Pilko švarko rankovė su įskėlimu ir dekoratyvinėmis sagomis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
