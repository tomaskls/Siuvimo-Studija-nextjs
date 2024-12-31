import React from 'react';
import style from './sukneles3.module.css';
import Image from 'next/image';

export default function Sewing4() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Suknelės siuvimo paslauga</h3>
                    <p className={style.p}>Kokybiška vilnonė suknelė su pilnu pamušalu. Kruopščiai parinktos medžiagos užtikrina komfortą ir ilgaamžiškumą - vilnonis audinys suteikia šilumą, o pamušalas - malonų pojūtį dėvint.</p>
                    <Image className={style.img}
                        src="/Images/plytines_spalvos_suknele.webp"
                        alt="Vilnonė suknelė su pamušalu"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                {/* <div className={style.content} >
                    <h3 className={style.h3}>Vilnonė suknelė</h3>
                    <Image className={style.img2}
                        src="/Images/zalia_suknele.webp"
                        alt="Žalia vilnonė suknelė"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div> */}
            </div>
        </>
    )
}