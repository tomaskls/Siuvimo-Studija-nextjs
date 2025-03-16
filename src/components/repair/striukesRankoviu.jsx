import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair3() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Striukės rankovių trumpinimas</h3>
            <p className={style.p}>Klientės vandeniui atspari striukė pritaikyta tobulai! Rankovės sutrumpintos 5 cm, išlaikant visas striukės funkcijas.</p>
            <Image className={style.img}
                src="/Images/striukes_rankoviu_trumpinimas.webp"
                alt="Striukės rankovės prieš trumpinima ir po"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}