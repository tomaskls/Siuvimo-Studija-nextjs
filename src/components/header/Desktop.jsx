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
          <Link href="/" legacyBehavior>
            <a className={style.link}><button className={style.navButton}>Studija</button></a>
          </Link>
          <Link href="/flisiniai-dzemperiai" legacyBehavior>
            <a><button className={style.navButton}>Džemperiai</button></a>
          </Link>
          <Link href="/drabuziu-taisymas" legacyBehavior>
            <a><button className={style.navButton}>Taisymas</button></a>
          </Link>
          <Link href="/siuvykla" legacyBehavior>
            <a><button className={style.navButton}>Siuvimas</button></a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a><button className={style.navButton}>Galerija</button></a>
          </Link>
          <Link href="/drabuziu-taisymo-kainos" legacyBehavior>
            <a><button className={style.navButton}>Kainos</button></a>
          </Link>
          <Link href="/kontaktai" legacyBehavior>
            <a><button className={style.navButton}>Kontaktai</button></a>
          </Link>
        </div>
      </nav>
    </header>
  );
};