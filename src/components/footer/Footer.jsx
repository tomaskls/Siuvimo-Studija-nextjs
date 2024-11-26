import style from './Footer.module.css';
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={style.footer}>&copy; Neringos Siuvimo Studija {currentYear}</div>
    );
}