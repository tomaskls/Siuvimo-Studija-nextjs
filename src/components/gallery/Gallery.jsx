"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './Gallery.module.css';
import { galleryImages } from './images';

const Pictures = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };
    document.body.classList.add(style.noScroll);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove(style.noScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className={style.picturesContainer}>
      <h1 className={style.title}>Mūsų Darbų Galerija</h1>
      <p className={style.descr}>Siuvimo darbų pavyzdžiai. Pamatykite, kokius drabužius pasiuvome mūsų klientams</p>
      <div className={style.imageGrid}>
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={style.imageButton}
            onClick={() => setSelectedImage(image)}
            aria-label={`Padidinti nuotrauką: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 760px) 100vw, 300px"
              className={style.galleryImage}
              priority={index < 4}
            />
          </button>
        ))}
      </div>
      {selectedImage && (
        <div
          className={style.fullscreenOverlay}
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={selectedImage.width}
            height={selectedImage.height}
            sizes="90vw"
            className={style.fullscreenImage}
          />
        </div>
      )}
    </div>
  );
};

export default Pictures;
