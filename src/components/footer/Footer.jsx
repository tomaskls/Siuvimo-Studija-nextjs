import style from './Footer.module.css';
import React from 'react';
import { CookieSettingsButton } from './CookieSettingsButton';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={style.footer}>
            <span>Sukurta</span>
            <a 
                className={style.tmh} 
                href="https://www.tmh.lt" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Tomorrow&apos;s Media House
            </a>
            <span>© {currentYear} Neringos Siuvimo Studija. Visos teisės saugomos.</span>
            <CookieSettingsButton />
        </footer>
    );
}