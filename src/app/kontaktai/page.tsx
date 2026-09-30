import React from 'react';
import Image from 'next/image';
import style from './Contacts.module.css';
import { SocialLinks } from './SocialLinks';
import { Metadata } from 'next';
import { openingHours, lunchBreak, formatTime } from '../../data/openingHours';
import MapEmbed from './MapEmbed';

export const metadata: Metadata = {
    title: "Kontaktai | Neringos Siuvimo Studija Šiauliuose",
    description: "Mus rasite adresu: Vytauto g. 80, Šiauliai. Skambinkite tel: +370 600 55316. Reikalinga profesionali konsultacija? Susisiekite su mumis jau šiandien! ",
    openGraph: {
        title: 'Kontaktai',
        description: 'Mus rasite adresu: Vytauto g. 80, Šiauliai. Skambinkite tel: +370 600 55316 ', 
        url: 'https://www.neringos-siuvimo-studija.lt/kontaktai',
        siteName: 'Neringos Siuvimo Studija',
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/imgGallery/suknele_su_ornamentais_2.webp', 
                width: 900,
                height: 1354,
            },
        ],
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/kontaktai',
    }
};

export default function Contacts() {
    return (
        <div className={style.contactsContainer}>
            <div className={style.mainContainer}>
                <div className={style.social}>
                    <SocialLinks />
                </div>
                <div className={style.contacts}>
                    <h1>Kontaktai</h1>
                    <a href="tel:+37060055316">Skambinkite tel: +370 600 55316</a>
                    <a href="mailto:neringos.siuvimo.studija@gmail.com">neringos.siuvimo.studija@gmail.com</a>
                    <address className={style.address}>Mus rasite adresu: <br />Vytauto g. 80 <br />Šiauliai</address>
                    <p className={style.notice}>Planuojate apsilankyti? Mums būtų malonu, jei prieš tai paskambintumėte.<br />Taip galėsime užtikrinti, kad Jums nereikės laukti.</p>
                </div>
            </div>
            <div className={style.hours}>
                <h2 className={style.hoursTitle}>Darbo laikas</h2>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.eilute}>Diena</th>
                            <th className={style.eilute}>Laikas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {openingHours.map((day) => (
                            <tr key={day.schemaDay}>
                                <td className={style.eilute}>{day.name}</td>
                                <td className={style.eilute}>{formatTime(day.opens)} - {formatTime(day.closes)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className={style.eilute}>Šeštadienis, sekmadienis</td>
                            <td className={style.eilute}>Nedirbame</td>
                        </tr>
                        <tr>
                            <td className={style.eilute}>Pietų pertrauka</td>
                            <td className={style.eilute}>{formatTime(lunchBreak.start)} - {formatTime(lunchBreak.end)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Image className={style.img}
                src="/Images/kava_900.webp"
                alt="Kavos pertraukėlė"
                width={500}
                height={300}
                priority={false}
            />
            <MapEmbed />
        </div>
    );
}
