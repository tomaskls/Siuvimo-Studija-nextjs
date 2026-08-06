import React from 'react';
import style from './sukneles4.module.css';
import Image from 'next/image';

export default function Sewing19() {
    return (
        <>
            <div className={style.container}>
                {/* H1 antraštė ir teksto blokas virš abiejų nuotraukų */}
                <div className={style.topText}>
                    <h3 className={style.h4}>Unikalus rūbas</h3>
                    <ul className={style.ul}>
                        <li>
                            <strong>Tai individualus užsakymas</strong> ,kurtas  pasipuošri renginio vedėjai.
                        </li>
                        <li>
                            <strong>Saulės ir paukščio motyvas:</strong> Didysis ratas su spinduliais primena tradicinį saulės arba segmentinės žvaigždės simbolį, kuris baltų kultūroje reiškia gyvybę, šviesą ir pasaulio tvarką. Šalia esančios tamsios formos primena stilizuotus paukščius arba gyvybės medžio šakas, kurios dažnai sutinkamos lietuvių tautiniuose drabužiuose (prijuostėse, delmonuose) bei verpstėse.
                        </li>
                        <li>
                            <strong>Tautinė mandala:</strong> Šiuolaikiniame kontekste tokie geometriniai, simetriški apskritimų deriniai dar vadinami tautinėmis mandalomis. Jie sujungia baltiškąją geometriją ir universalią sakralinę struktūrą.
                        </li>
                    </ul>
                    <p className={style.p}>
                        Šis dizainas puikiai iliustruoja, kaip „Neringos siuvimo studija“ pritaiko etno elementus moderniai, kasdienei ar proginiai aprangai.
                    </p>
                </div>

                {/* Nuotraukų blokai (desktop variante jie bus šalia vienas kito) */}
                <div className={style.content}>
                    <Image className={style.img}
                        src="/Images/2026/IMG20260804140833.webp"
                        alt="Proginis kostiumėlis"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
                <div className={style.content} >
                    <Image className={style.img2}
                        src="/Images/2026/IMG20260728164955.webp"
                        alt="suknelė"
                        width={900}
                        height={1600}
                        priority={false}
                    />
                </div>
            </div>
        </>
    )
}