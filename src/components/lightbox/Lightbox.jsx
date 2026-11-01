"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import style from './Lightbox.module.css';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../svg';

// Mažiausias piršto braukimas į šoną (px), kad nuotrauka persiverstų
const SWIPE_DISTANCE = 50;
const SIZES = '(max-width: 760px) 100vw, 90vw';

// Gretimos nuotraukos numeris: po paskutinės – pirmoji, prieš pirmąją – paskutinė
const step = (index, by, count) => (index + by + count) % count;

// Nuotraukų peržiūra per visą ekraną: verčiama rodyklėmis, braukiant pirštu ir klaviatūra.
// images – [{ src, alt, width, height }], alt rodomas kaip aprašymas;
// index – rodomos nuotraukos numeris, null – peržiūra uždaryta; setIndex – jo useState funkcija.
export default function Lightbox({ images, index, setIndex }) {
  const closeButton = useRef(null);
  const touchStart = useRef(null);

  const count = images.length;
  const isOpen = index !== null;
  const close = () => setIndex(null);
  const show = (by) => setIndex((current) => step(current, by, count));

  // Kol peržiūra atidaryta: užrakinamas slinkimas, Escape uždaro, rodyklės verčia.
  // Uždarius fokusas grįžta į paspaustą nuotrauką.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIndex(null);
      if (event.key === 'ArrowLeft') setIndex((current) => step(current, -1, count));
      if (event.key === 'ArrowRight') setIndex((current) => step(current, 1, count));
    };
    closeButton.current?.focus();
    document.body.classList.add(style.noScroll);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove(style.noScroll);
      document.removeEventListener('keydown', handleKeyDown);
      opener?.focus();
    };
  }, [isOpen, count, setIndex]);

  if (!isOpen) return null;
  const selected = images[index];

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
    <div
      className={style.overlay}
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
          sizes={SIZES}
          className={style.image}
        />
        <figcaption className={style.caption}>
          {selected.alt}
          <span className={style.counter}>{index + 1} / {count}</span>
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
        const image = images[step(index, by, count)];
        return (
          <Image
            key={by}
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes={SIZES}
            loading="eager"
            className={style.preload}
          />
        );
      })}
    </div>
  );
}
