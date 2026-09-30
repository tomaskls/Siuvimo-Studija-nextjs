"use client";
import React, { useState, useEffect } from 'react';
import style from './SideMenu.module.css';
import Link from 'next/link';
import { MenuIcon, CloseIcon, Scissors } from '../svg';

const menuLinks = [
  { href: '/', label: 'Apie mus' },
  { href: '/drabuziu-taisymo-kainos', label: 'Kainos' },
  { href: '/drabuziu-taisymas', label: 'Taisymas' },
  { href: '/siuvykla', label: 'Siuvimas' },
  { href: '/duk', label: 'D.U.K.' },
  { href: '/gallery', label: 'Galerija' },
  { href: '/kontaktai', label: 'Kontaktai' },
];

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Kol meniu atidarytas: užrakinamas puslapio slinkimas, Escape uždaro meniu.
  // Paspaudimą šalia meniu pagauna .dimmer sluoksnis.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={style.sideMenu}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className={style.sidebarToggle} aria-label="Atidaryti šoninį meniu">
          <MenuIcon />
        </button>
      )}
      <div className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
        <button onClick={closeMenu} className={style.sidebarClose} aria-label="Uždaryti šoninį meniu">
          <CloseIcon />
        </button>
        <nav className={style.sidebarNav}>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.href} className={style.liGallery}>
                <Scissors />
                <Link href={link.href} onClick={closeMenu}>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && <div className={style.dimmer} onClick={closeMenu} aria-hidden="true"></div>}
    </div>
  );
};