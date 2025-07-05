import React from 'react';
import style from './sukneles2.module.css';
import Image from 'next/image';

export default function Sewing3() {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.h3}>✨ Palaidinė ir sijonas</h3>
                    <p className={style.p}>Stilingas komplektas: moderni palaidinė iš eko odos ir prabangus veliūrinis sijonas. Kruopščiai parinktos medžiagos ir apgalvotas dizainas sukuria elegantišką ir puošnų derinį.</p>
                    <Image className={style.img}
                        src="/Images/sventinis_kostiumas.webp"
                        alt="Stilingas komplektas: moderni palaidinė iš eko odos ir prabangus veliūrinis sijonas. Kruopščiai parinktos medžiagos ir apgalvotas dizainas sukuria elegantišką ir išskirtinį derinį."
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <h3 className={style.h3}>✨ Vilnonės suknelė</h3>
                    <p className={style.p}>Elegantiška žalios spalvos suknelė, pasiūta iš kokybiško vilnonio audinio. Natūrali vilna užtikrina komfortą ir šilumą, o klasikinis dizainas pabrėžia audinio grožį.</p>
                    <Image className={style.img2}
                        src="/Images/zalia_suknele.webp"
                        alt="Žalia vilnonė suknelė"
                        width={900}
                        height={1200}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}