import React from 'react';
import style from './Product.module.css';
import Image from 'next/image';

export const PictureMain = () => {
    return (
        <Image className={style.img}
        src="/images/siltas_flisinis_dzemperis_900.webp"
        alt="šiltas flisinis džemperis"
        width={900}
        height={1352}
      />
    )
};
export const Picture1 = () => {
    return (
        <Image className={style.img}
        src="/Images/zalias_dzemperis.webp"
        alt="žalias džemperis"
        width={900}
        height={1352}
      />
      )
};
export const Picture2 = () => {
    return (
        <Image className={style.img}
        src="/Images/dzemperis.webp"
        alt="džemperis"
        width={900}
        height={1352}
      />
    )
};
export const Picture3 = () => {
    return (
        <Image className={style.img}
        src="/Images/melynas_dzemperis.webp"
        alt="melynas dzemperis"
        width={900}
        height={1352}
      />
    )
};
export const Picture4 = () => {
    return (
        <Image className={style.img}
        src="/Images/moteriskas_flisinis_dzemperis.webp"
        alt="moteriskas flisinis džemperis"
        width={900}
        height={1352}
      />
    )
};
export const Picture5 = () => {
    return (
        <Image className={style.img}
        src="/Images/pilkas_flisinis_dzemperis.webp"
        alt="pilkas flisinis džemperis"
        width={900}
        height={135}
      />
   
    )
};