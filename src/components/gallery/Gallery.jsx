"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import style from './Gallery.module.css';
import { galleryImages } from './images';
import Lightbox from '../lightbox/Lightbox';

const Pictures = () => {
  // Atidarytos nuotraukos numeris; null – peržiūra uždaryta
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className={style.picturesContainer}>
      <h1 className={style.title}>Mūsų darbų galerija</h1>
      <p className={style.descr}>Siuvimo darbų pavyzdžiai. Pamatykite, kokius drabužius pasiuvome mūsų klientams</p>
      <div className={style.imageGrid}>
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={style.imageButton}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Padidinti nuotrauką: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 760px) 50vw, 300px"
              className={style.galleryImage}
              priority={index < 4}
            />
          </button>
        ))}
      </div>
      <Lightbox images={galleryImages} index={selectedIndex} setIndex={setSelectedIndex} />
    </div>
  );
};

export default Pictures;
