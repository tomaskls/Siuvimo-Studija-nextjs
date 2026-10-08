import style from './Footer.module.css';
import React from 'react';
import Link from 'next/link';
import { CookieSettingsButton } from './CookieSettingsButton';
import { business } from '../../data/business';
import { getGroupedHours, lunchBreak, formatTime } from '../../data/openingHours';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className={style.info}>
                <div>
                    <h2 className={style.infoTitle}>Adresas</h2>
                    <address className={style.address}>
                        {business.street}<br />
                        {business.city}
                    </address>
                    <a className={style.link} href={business.mapUrl} target="_blank" rel="noopener noreferrer">
                        Žiūrėti žemėlapyje
                    </a>
                </div>
                <div>
                    <h2 className={style.infoTitle}>Darbo laikas</h2>
                    <ul className={style.hours}>
                        {getGroupedHours().map((group) => (
                            <li key={group.days}>
                                <span>{group.days}</span>
                                <span className={style.time}>{group.hours}</span>
                            </li>
                        ))}
                        <li>
                            <span>Pietūs</span>
                            <span className={style.time}>{formatTime(lunchBreak.start)} - {formatTime(lunchBreak.end)}</span>
                        </li>
                        <li>
                            <span>Št, Sk</span>
                            <span>Nedirbame</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className={style.infoTitle}>Kontaktai</h2>
                    <a className={style.link} href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                    <a className={`${style.link} ${style.email}`} href={`mailto:${business.email}`}>{business.email}</a>
                    <Link className={style.link} href="/kontaktai">Visa kontaktinė informacija</Link>
                </div>
            </div>
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
