"use client";
import React, { useEffect, useRef, useState } from 'react';
import style from './Desktop.module.css';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Studija' },
  { href: '/drabuziu-taisymas', label: 'Taisymas' },
  { href: '/siuvykla', label: 'Siuvimas' },
  { href: '/gallery', label: 'Galerija' },
  { href: '/drabuziu-taisymo-kainos', label: 'Kainos' },
  { href: '/duk', label: 'D.U.K.' },
  { href: '/kontaktai', label: 'Kontaktai' },
];

export const HeaderD = () => {
  const titleRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  // Meniu prilimpa prie viršaus, kai pavadinimas išslenka iš ekrano
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.header}>
      <p ref={titleRef} className={style.title}>Neringos Siuvimo Studija</p>
      <nav className={`${style.nav} ${isSticky ? `${style.fixed} ${style.scrolled}` : ''}`}>
        <div className={style.navContent}>
          <p className={`${style.neringos} ${isSticky ? style.visible : ''}`}>
            Neringos Siuvimo Studija
          </p>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={style.navButton}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
