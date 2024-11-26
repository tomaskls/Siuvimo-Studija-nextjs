
// components/ScrollEffectWrapper.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Desktop.module.css';

export const ScrollEffectWrapper = ({ children }) => {
    const navRef = useRef(null);
    const neringosRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const neringos = neringosRef.current;

        if (!nav || !neringos) return;

        const handleScroll = () => {
            const navTop = nav.getBoundingClientRect().top;
            if (window.scrollY > navTop) {
                nav.classList.add(styles.fixed);
                nav.classList.add(styles.scrolled);
                neringos.classList.add(styles.visible);
            } else {
                nav.classList.remove(styles.fixed);
                nav.classList.remove(styles.scrolled);
                neringos.classList.remove(styles.visible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return React.Children.map(children, child => 
        React.cloneElement(child, { 
            ref: child.type === 'nav' ? navRef : null,
            children: React.Children.map(child.props.children, childEl => 
                childEl.type === 'h2' 
                    ? React.cloneElement(childEl, { ref: neringosRef }) 
                    : childEl
            )
        })
    );
};