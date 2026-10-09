import React from 'react';
import style from './sewing8.module.css';
import Image from 'next/image';

export default function Sewing18() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Lininis kelnių komplektas</h3>
                    <Image className={style.img}
                        src="/Images/2026/IMG20260527091741.webp"
                        alt="Dvi sulankstytos juodos palaidinės"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Lininė suknelė su nėriniais</h3>
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260701100840.webp"
                        alt="Pilkos suknelės nėrinių aplikacija iš arti"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}