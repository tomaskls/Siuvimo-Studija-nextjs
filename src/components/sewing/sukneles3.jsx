import React from 'react';
import style from './sukneles3.module.css';
import Image from 'next/image';

export default function Sewing4() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨Vilnonė suknelė</h3>
                    <p className={style.p}>Kokybiška vilnonė suknelė su pilnu pamušalu. Kruopščiai parinktos medžiagos užtikrina komfortą ir ilgaamžiškumą - vilnonis audinys suteikia šilumą, o pamušalas - malonų pojūtį dėvint.</p>
                    <Image className={style.img}
                        src="/Images/plytines_spalvos_suknele.webp"
                        alt="Vilnonė suknelė su pamušalu"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Liemenė</h3>
                    <p className={style.p}>Ši stilinga liemenė pasiūta iš reto audimo melanžinio audinio, kuris derina juodos, baltos ir pilkos spalvos siūlus, suteikdamas lengvumo ir subtilios tekstūros efektą.Visos siūlės yra kruopščiai apkantuotos, suteikiant gaminiui išbaigtumo ir ilgaamžiškumo.</p>
                    <Image className={style.img2}
                        src="/imgGallery/kantuota_liemene.webp"
                        alt="Kantuota liemene"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}