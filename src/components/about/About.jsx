import { Adata } from '../svg';
import style from './About.module.css';
import React from 'react';
import Image from 'next/image';


export default function About() {

   return (
    <div className={style.container}>
      <div>
        <Image className={style.img}
          src="/Images/siuvykla_siauliai_900.webp"
          alt="Siuvykla Siauliuose"
          width={750}
          height={1350}
          priority>

        </Image>
      </div>
      <div className={style.content}>
        <h1 className={style.h2}>Apie Studiją</h1>
        <p className={style.p}>Labas, mano vardas Neringa. Esu profesionali siuvimo meistrė, konstruktorė ir modeliuotoja. Nuo 2007 m. siuvykla teikia rūbų siuvimo ir taisymo paslaugas. Daugiametė patirtis užtikrina, kad jums bus suteikta kvalifikuota konsultacija apie audinius, jų pasirinkimą ir pritaikymą pagal figūrą. <br /><br /> Kviečiu apsilankyti ir kreiptis visais siuvimo ir rūbų taisymo klausimais. </p>
        <div className={style.svg} ><Adata/></div>
      </div>
    </div>
   )
}