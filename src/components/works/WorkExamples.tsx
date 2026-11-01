"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import style from './WorkExamples.module.css';
import type { Work } from './types';
import Lightbox from '../lightbox/Lightbox';

interface Props {
    works: Work[];
    // Kiek darbų rodoma iš karto; kiti – paspaudus „Rodyti daugiau darbų“.
    // Parinkta taip, kad paskutinė eilutė būtų pilna (pridėjus darbą, gali tekti keisti).
    initialCount: number;
    // Miniatiūrų proporcija (CSS aspect-ratio); visa nuotrauka matoma peržiūroje
    photoRatio: string;
}

export default function WorkExamples({ works, initialCount, photoRatio }: Props) {
    const [showAll, setShowAll] = useState(false);
    // Atidarytos nuotraukos numeris; null – peržiūra uždaryta
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Peržiūroje verčiamos visų darbų nuotraukos iš eilės;
    // firstImageIndex – kiekvieno darbo pirmosios nuotraukos numeris toje eilėje
    const allImages = works.flatMap((work) => work.images);
    const firstImageIndex = works.map((_, i) =>
        works.slice(0, i).reduce((sum, work) => sum + work.images.length, 0)
    );

    return (
        <>
            <div className={style.grid}>
                {works.map((work, i) => (
                    <article
                        key={work.images[0].src}
                        className={`${style.card} ${work.images.length === 2 ? style.wide : ''} ${work.images.length > 2 ? style.full : ''}`}
                        hidden={!showAll && i >= initialCount}
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
                                        style={{ aspectRatio: photoRatio, objectPosition: image.position }}
                                    />
                                </button>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
            {!showAll && works.length > initialCount && (
                <div className={style.moreWrap}>
                    <button type="button" className={style.more} onClick={() => setShowAll(true)}>
                        Rodyti daugiau darbų ({works.length - initialCount})
                    </button>
                </div>
            )}
            <Lightbox images={allImages} index={selectedIndex} setIndex={setSelectedIndex} />
        </>
    );
}
