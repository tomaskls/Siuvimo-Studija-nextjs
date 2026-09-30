import React from "react";
import style from "../app/page.module.css";
import Image from "next/image";
import { Adata } from '../components/svg';
import { Siulai, ScissorsIcon } from '../components/svg';


export default function Page() {
  return (
    <>
      <div className={style.container}>
        <div>
          <Image className={style.img}
            src="/Images/siuvykla_siauliai_900.webp"
            alt="Siuvykla Šiauliuose"
            width={900}
            height={1350}
            priority={true}>
          </Image>
        </div>
        <div className={style.content}>
          <h1 className={style.h2}>Apie Studiją</h1>
          <p className={style.p}>Labas, mano vardas Neringa. Esu profesionali siuvimo meistrė, konstruktorė ir modeliuotoja. Nuo 2007 m. siuvykla teikia rūbų siuvimo ir taisymo paslaugas. Daugiametė patirtis užtikrina, kad jums bus suteikta kvalifikuota konsultacija apie audinius, jų pasirinkimą ir pritaikymą pagal figūrą. <br /><br /> Kviečiu apsilankyti ir kreiptis visais siuvimo ir rūbų taisymo klausimais. </p>
          <div className={style.svg} ><Adata /></div>
        </div>
      </div>
      <div className={`${style.container} ${style.container2}`}>
        <Image className={style.img}
          src="/Images/kelniu_palenkimas_900.webp"
          width={900}
          height={1350}
          alt="Kelnių palenkimas Šiauliuose"
          priority={false}
        />
        <div className={style.content}>
          <h2 className={style.h2}>Paslaugos</h2>
          <ul className={style.repairList}>
            <li><ScissorsIcon /> Individualus siuvimas</li>
            <li><ScissorsIcon /> Drabužių taisymas</li>
            <li><ScissorsIcon /> Užtrauktukų keitimas</li>
            <li><ScissorsIcon /> Pamušalo keitimas</li>
            <li><ScissorsIcon /> Paltų ir striukių taisymas</li>
            <li><ScissorsIcon /> Kelnių siaurinimas, trumpinimas</li>
            <li><ScissorsIcon /> Aplikacijos ant drabužių</li>
            <li><ScissorsIcon /> Konsultacijos dėl drabužių modelio ir medžiagų pasirinkimo</li>
            <li><ScissorsIcon /> Vienetinių lekalų konstravimas</li>
          </ul>
          <div className={style.svg}><Siulai /></div>
        </div>
      </div>
    </>
  );
}
