import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair9() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Išskirtinio modelio proginės suknelės taisymas</h3>
            <p className={style.p}>Suknelė pasiaurinta per krūtinę</p>
            <Image className={style.img}
                src="/Images/proginiu_sukneliu_taisymas.webp"
                alt="proginiu_sukneliu_taisymas"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}