import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair8() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✨ Odinės striukės taisymas</h3>
            <p className={style.p}>Odinės striukės įplyšimas sutaisytas ir nepastebimai restauruotas, išsaugant originalią odos spalvą ir tekstūrą.</p>
            <Image className={style.img}
                src="/Images/odiniu_rubu_taisymas.webp"
                alt="odinės_striukės_taisymas_vaizdas_pries_ir_po"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}