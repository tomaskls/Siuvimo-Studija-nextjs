"use client";
import React, { useEffect, useRef, useState } from 'react';
import style from './Desktop.module.css';
import Link from 'next/link';

export const HeaderD = () => {
  const navRef = useRef(null);
  const neringosRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setIsSticky(window.scrollY > navTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={style.header}>
      <h2 className={style.title}>Neringos Siuvimo Studija</h2>
      <nav
        ref={navRef}
        className={`${style.nav} ${isSticky ? style.fixed : ''} ${isSticky ? style.scrolled : ''}`}
      >
        <div className={style.navContent}>
          <h2
            ref={neringosRef}
            className={`${style.neringos} ${isSticky ? style.visible : ''}`}
          >
            Neringos Siuvimo Studija
          </h2>
          <Link href="/" className={style.link}>
            <button className={style.navButton}>Studija</button>
          </Link>
          <Link href="/drabuziu-taisymas">
            <button className={style.navButton}>Taisymas</button>
          </Link>
          <Link href="/siuvykla">
            <button className={style.navButton}>Siuvimas</button>
          </Link>
          <Link href="/gallery">
            <button className={style.navButton}>Galerija</button>
          </Link>
          <Link href="/drabuziu-taisymo-kainos">
            <button className={style.navButton}>Kainos</button>
          </Link>
          <Link href="/kontaktai">
            <button className={style.navButton}>Kontaktai</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};