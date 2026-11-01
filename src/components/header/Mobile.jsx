import React from 'react';
import style from './Mobile.module.css';

export function HeaderMobile() {
  return (
    <div className={style.mobileHeader}>
      <div className={style.sticky}>
        <a className={style.line1} href="tel:+37060055316">Turite klausimų? +370 600 55316</a>
        <div className={style.line2}>
          <p className={style.siteName}>Neringos Siuvimo Studija</p>
        </div>
      </div>
    </div>
  );
}
