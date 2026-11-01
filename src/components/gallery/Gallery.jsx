"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import style from './Gallery.module.css';
import { galleryImages } from './images';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../svg';

// Mažiausias piršto braukimas į šoną (px), kad nuotrauka persiverstų
const SWIPE_DISTANCE = 50;
const LIGHTBOX_SIZES = '(max-width: 760px) 100vw, 90vw';

// Gretimos nuotraukos numeris: po paskutinės – pirmoji, prieš pirmąją – paskutinė
const step = (index, by) => (index + by + galleryImages.length) % galleryImages.length;

const Pictures = () => {
  // Atidarytos nuotraukos numeris; null – peržiūra uždaryta
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeButton = useRef(null);
  const touchStart = useRef(null);

  const isOpen = selectedIndex !== null;
  const selected = isOpen ? galleryImages[selectedIndex] : null;
  const close = () => setSelectedIndex(null);
  const show = (by) => setSelectedIndex((index) => step(index, by));

  // Kol peržiūra atidaryta: užrakinamas slinkimas, Escape uždaro, rodyklės verčia.
  // Uždarius fokusas grįžta į paspaustą nuotrauką.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft') setSelectedIndex((index) => step(index, -1));
      if (event.key === 'ArrowRight') setSelectedIndex((index) => step(index, 1));
    };
    closeButton.current?.focus();
    document.body.classList.add(style.noScroll);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove(style.noScroll);
      document.removeEventListener('keydown', handleKeyDown);
      opener?.focus();
    };
  }, [isOpen]);

  const handleTouchStart = (event) => {
    // Du pirštai – didinimas, ne vertimas
    if (event.touches.length !== 1) {
      touchStart.current = null;
      return;
    }
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const dx = event.changedTouches[0].clientX - touchStart.current.x;
    const dy = event.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy)) show(dx < 0 ? 1 : -1);
  };

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
      {isOpen && (
        <div
          className={style.fullscreenOverlay}
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
        >
          <figure className={style.figure} onClick={(event) => event.stopPropagation()}>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              sizes={LIGHTBOX_SIZES}
              className={style.fullscreenImage}
            />
            <figcaption className={style.caption}>
              {selected.alt}
              <span className={style.counter}>{selectedIndex + 1} / {galleryImages.length}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${style.navButton} ${style.prev}`}
            onClick={(event) => { event.stopPropagation(); show(-1); }}
            aria-label="Ankstesnė nuotrauka"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            className={`${style.navButton} ${style.next}`}
            onClick={(event) => { event.stopPropagation(); show(1); }}
            aria-label="Kita nuotrauka"
          >
            <ChevronRightIcon />
          </button>
          <button ref={closeButton} type="button" className={style.closeButton} onClick={close} aria-label="Uždaryti">
            <CloseIcon />
          </button>
          {/* Gretimos nuotraukos įkeliamos iš anksto, kad verčiant nereikėtų laukti */}
          {[-1, 1].map((by) => {
            const image = galleryImages[step(selectedIndex, by)];
            return (
              <Image
                key={by}
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                sizes={LIGHTBOX_SIZES}
                loading="eager"
                className={style.preload}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pictures;
