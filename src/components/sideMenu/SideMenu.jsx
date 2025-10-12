"use client";
import React, { useState, useEffect, useRef } from 'react';
import style from './SideMenu.module.css';
import Link from 'next/link';
import { MenuIcon, CloseIcon, Scissors } from '../svg';

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true); // Nustatome, kad komponentas yra sumontuotas
    const handleClickOutside = (event) => {
      if (isMounted && sidebarRef.current && !sidebarRef.current.contains(event.target)) { // Tikriname isMounted
          closeMenu();
      }
    };

    if (isMounted) { // Pridedame event listener tik jei komponentas yra sumontuotas
        document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (isMounted) { // Pašaliname event listener tik jei komponentas yra sumontuotas
          document.removeEventListener('mousedown', handleClickOutside);
      }
    };

  // Pridėjome isMounted prie priklausomybių masyvo
}, [isMounted]);

useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return () => {
        document.body.classList.remove('no-scroll');
      };
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };



  return (
    <div className={style.sideMenu}>
      {!isOpen && (
        <button onClick={toggleMenu} className={style.sidebarToggle} aria-label="Atidaryti šoninį meniu">
          <MenuIcon />
        </button>
      )}

      <div ref={sidebarRef} className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
        <button onClick={closeMenu} className={style.sidebarClose} aria-label="Uždaryti šoninį meniu">
          <CloseIcon />
        </button>
        <nav className={style.sidebarNav}>
          <ul>
            <li className={style.liGallery}>
              <Scissors />
              <Link href="/" legacyBehavior>
                <a onClick={closeMenu}><span>Apie mus</span></a>
              </Link>
            </li>
                        <li className={style.liGallery}>
              <Scissors />
              <Link href="/drabuziu-taisymo-kainos" legacyBehavior>
                <a onClick={closeMenu}><span>Kainos</span></a>
              </Link>
            </li>
            <li className={style.liGallery}>
              <Scissors />
              <Link href="/drabuziu-taisymas" legacyBehavior>
                <a onClick={closeMenu}><span>Taisymas</span></a>
              </Link>
            </li>
            <li className={style.liGallery}>
              <Scissors />
              <Link href="/siuvykla" legacyBehavior>
                <a onClick={closeMenu}><span>Siuvimas</span></a>
              </Link>
            </li>
                      <li className={style.liGallery}>
              <Scissors />
              <Link href="/flisiniai-dzemperiai" legacyBehavior>
                <a onClick={closeMenu}><span>Džemperiai</span></a>
              </Link>
            </li>
            <li className={style.liGallery}>
              <Scissors />
              <Link href="/duk" legacyBehavior>
                <a onClick={closeMenu}><span>D.U.K.</span></a>
              </Link>
            </li>
            <li className={style.liGallery}>
              <Scissors />
              <Link href="/gallery" legacyBehavior>
                <a onClick={closeMenu}><span>Galerija</span></a>
              </Link>
            </li>

            <li className={style.liGallery}>
              <Scissors />
              <Link href="/kontaktai" legacyBehavior>
                <a onClick={closeMenu}><span>Kontaktai</span></a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className={style.dimmer} onClick={closeMenu}></div>}
    </div>
  );
};