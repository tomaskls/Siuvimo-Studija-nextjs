import React from 'react';
import style from './sewing.module.css';
import Image from 'next/image';

export default function Sewing14() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Kelnių konstravimas</h3>
                    <Image className={style.img}
                        src="/Images/2026/IMG20260518121950.webp"
                        alt="Pepito rašto audinys ir lekalai"
                        width={900}
                        height={2100}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Lininis kostiumėlis</h3>
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260526163334.webp"
                        alt="Juoda palaidinė trumpomis rankovėmis ir plačios kelnės"
                        width={900}
                        height={2100}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}