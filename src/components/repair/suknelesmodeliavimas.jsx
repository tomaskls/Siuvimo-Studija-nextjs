import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair13() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Suknelės modeliavimas</h3>
            <p className={style.p}>Originali suknelė buvo be rankovių. Buvo parinktas audinys ir sumodeliuotos naujos rankovės</p>
            <Image className={style.img}
                src="/Images/sukneles_modeliavimas.webp"
                alt="sukneles modeliavimas"
                width={900}
                height={1186}
                priority={false}
            />
        </div>
    )
}