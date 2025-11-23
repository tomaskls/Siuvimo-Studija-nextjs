import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair15() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>✂️ Striukės rankovių ilginimas</h3>
            <p className={style.p}>Pailgintos striukės rankovės Rib trikotažu</p>
            <Image className={style.img}
                src="/Images/striukes.webp"
                alt="Striukės rankovių ilginimas"
                width={900}
                height={1187}
                priority={false}
            />
        </div>
    )
}