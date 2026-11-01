import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing27() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Vilnos suknelė su pamušalu</h3>
                    <p className={style.p}>Vilnonė suknelė su diržu, pabrėžiančiu liemenį.</p>
                    <Image className={style.img}
                        src="/imgGallery/2026/oranzine-suknele-su-dirzu.webp"
                        alt="Oranžinė vilnonė suknelė su pamušalu ir liemenį pabrėžiančiu diržu"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Originali suknelė</h3>
                    <p className={style.p}>Fotografija perkelta ant audinio, iš kurio pasiūta suknelė.</p>
                    <Image className={style.img2}
                        src="/imgGallery/2026/rastuota-suknele.webp"
                        alt="Originali suknelė iš audinio su perkelta fotografija, trumpomis rankovėmis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}
