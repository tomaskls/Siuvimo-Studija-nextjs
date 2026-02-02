import React from 'react';
import Image from 'next/image';
import style from './Contacts.module.css';
import { FbLink, InstLink, PinLink } from './SocialLinks';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Kontaktai | Neringos Siuvimo Studija Šiauliuose",
    description: "Mus rasite adresu: Vytauto g. 8O Šiauliai. Skambinkite tel: +370 600 55316. Reikalinga profesionali konsultacija? Susisiekite su mumis jau šiandien! ",
    openGraph: {
        title: 'Kontaktai',
        description: 'Mus rasite adresu: Vytauto g. 8O Šiauliai. Skambinkite tel: +370 600 55316 ', 
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
                    <FbLink />
                    <InstLink />
                    <PinLink />
                </div>
                <div className={style.contacts}>
                    <h1>Kontaktai</h1>
                    <a href="tel:+37060055316">Skambinkite tel: +370 600 55316</a>
                    <p>Mus rasite adresu: <br />Vytauto g. 80 <br />Šiauliai</p>
                    <p>Planuojate apsilankyti? Mums būtų malonu, jei prieš tai paskambintumėte.<br />Taip galėsime užtikrinti, kad Jums nereikės laukti.</p>
                    <p style={{ color: 'red', fontWeight: 'bold' }}>Dėmesio, dėl šalčio darbo laikas gali skirtis. Prieš vizitą, prašom butinai paskambinti!</p>
                    </div>
            </div>
            <div className={style.hours}>
                <h3>Darbo laikas</h3>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.eilute}>Diena</th>
                            <th className={style.eilute}>Laikas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={style.eilute}>Pirmadienis</td>
                            <td className={style.eilute}>9:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td className={style.eilute}>Antradienis</td>
                            <td className={style.eilute}>10:00 - 15:00</td>
                        </tr>
                        <tr>
                            <td className={style.eilute}>Trečiadienis</td>
                            <td className={style.eilute}>9:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td className={style.eilute}>Ketvirtadienis</td>
                            <td className={style.eilute}>10:00 - 15:00</td>
                        </tr>
                        <tr>
                            <td className={style.eilute}>Penktadienis</td>
                            <td className={style.eilute}>9:00 - 17:00</td>
                        </tr>
                        <tr>
                            <td className={style.eilute}>Pietų pertrauka</td>
                            <td className={style.eilute}>13:00 - 13:30</td>
                        </tr>
                    </tbody>
                </table>
                <table className={style.table} style={{marginTop: '10px'}}>
                    <thead>
                        <tr>
                            <th className={style.eilute}>Pietų pertrauka</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={style.eilute}>13:00 - 13:30</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <Image className={style.img}
                src="/Images/kava_900.webp"
                alt="Kavos pertraukele"
                width={500}
                height={300}
                priority={false}
            />
            <iframe
                className={style.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.234194280573!2d23.31294907676809!3d55.92797787848508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e330649f95bb%3A0x37e61039db777fb7!2sNERINGOS%20SIUVIMO%20STUDIJA!5e0!3m2!1slt!2slt!4v1727020354296!5m2!1slt!2slt"
                width={600}
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                loading='lazy'
                title="NERINGOS SIUVIMO STUDIJA žemėlapis"
            ></iframe>
        </div>
    );
}
