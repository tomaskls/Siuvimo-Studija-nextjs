"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import style from './SewingExamples.module.css';
import { sewingWorks } from './sewingWorks';
import Lightbox from '../lightbox/Lightbox';

// Kiek darbų rodoma iš karto; kiti – paspaudus „Rodyti daugiau darbų“.
// 11 – kad paskutinė eilutė būtų pilna (pridėjus darbą su kitu nuotraukų skaičiumi, gali tekti keisti)
const INITIAL_COUNT = 11;

// Peržiūroje verčiamos visų darbų nuotraukos iš eilės;
// firstImageIndex – kiekvieno darbo pirmosios nuotraukos numeris toje eilėje
const allImages = sewingWorks.flatMap((work) => work.images);
const firstImageIndex = sewingWorks.map((_, i) =>
    sewingWorks.slice(0, i).reduce((sum, work) => sum + work.images.length, 0)
);

export default function SewingExamples() {
    const [showAll, setShowAll] = useState(false);
    // Atidarytos nuotraukos numeris; null – peržiūra uždaryta
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <>
            <div className={style.grid}>
                {sewingWorks.map((work, i) => (
                    <article
                        key={work.images[0].src}
                        className={`${style.card} ${work.images.length === 2 ? style.wide : ''} ${work.images.length > 2 ? style.full : ''}`}
                        hidden={!showAll && i >= INITIAL_COUNT}
                    >
                        <h3 className={style.title}>{work.title}</h3>
                        {work.details && (
                            <ul className={style.details}>
                                {work.details.map((detail) => (
                                    <li key={detail.lead}><strong>{detail.lead}</strong> {detail.text}</li>
                                ))}
                            </ul>
                        )}
                        {work.text && <p className={style.text}>{work.text}</p>}
                        <div className={style.photos}>
                            {work.images.map((image, j) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    className={style.photoButton}
                                    onClick={() => setSelectedIndex(firstImageIndex[i] + j)}
                                    aria-label={`Padidinti nuotrauką: ${image.alt}`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        sizes="(max-width: 760px) 50vw, 250px"
                                        className={style.photo}
                                        style={{ objectPosition: image.position }}
                                    />
                                </button>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
            {!showAll && (
                <div className={style.moreWrap}>
                    <button type="button" className={style.more} onClick={() => setShowAll(true)}>
                        Rodyti daugiau darbų ({sewingWorks.length - INITIAL_COUNT})
                    </button>
                </div>
            )}
            <Lightbox images={allImages} index={selectedIndex} setIndex={setSelectedIndex} />
        </>
    );
}
