import React from 'react';
import Link from 'next/link';
import styles from './Desktop.module.css';
import { ScrollEffectWrapper } from './ScrollEffectWrapper';

export const HeaderD = () => {
    return (
        <ScrollEffectWrapper>
            <header className={styles.header}>
                <h1 className={styles.title}>Neringos Siuvimo Studija</h1>
                <nav className={styles.nav}>
                    <div className={styles.navContent}>
                        <h2 className={styles.neringos}>Neringos Siuvimo Studija</h2>
                        <Link href="/" className={styles.link}>
                            <button className={styles.navButton}>Studija</button>
                        </Link>
                        <Link href="/flisiniai-dzemperiai">
                            <button className={styles.navButton}>Džemperiai</button>
                        </Link>
                        <Link href="/drabuziu-taisymas">
                            <button className={styles.navButton}>Taisymas</button>
                        </Link>
                        <Link href="/siuvykla">
                            <button className={styles.navButton}>Siuvimas</button>
                        </Link>
                        <Link href="/gallery">
                            <button className={styles.navButton}>Galerija</button>
                        </Link>
                        <Link href="/drabuziu-taisymo-kainos">
                            <button className={styles.navButton}>Kainos</button>
                        </Link>
                        <Link href="/kontaktai">
                            <button className={styles.navButton}>Kontaktai</button>
                        </Link>
                    </div>
                </nav>
            </header>
        </ScrollEffectWrapper>
    );
};