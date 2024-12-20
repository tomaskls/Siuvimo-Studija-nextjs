import style from './Footer.module.css';
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={style.footer}>Sukurta
            <a className={style.tmh} href="www.tmh.lt">Tomorrow&apos;s Media House</a>
            © {currentYear} Neringos Siuvimo Studija. Visos teisės saugomos.
        </div>
    );
}