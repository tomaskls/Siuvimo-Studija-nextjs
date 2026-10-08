import style from './Footer.module.css';
import React from 'react';
import { CookieSettingsButton } from './CookieSettingsButton';
import { business } from '../../data/business';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            {/* Pavadinimas, adresas ir telefonas tekstu kiekviename puslapyje (vietinei / AI paieškai) */}
            <address className={style.nap}>
                <p>
                    <span>Neringos Siuvimo Studija</span>
                    <span>{business.street}, {business.city}</span>
                    <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                </p>
            </address>
            <div className={style.footer}>
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
            </div>
        </footer>
    );
}
