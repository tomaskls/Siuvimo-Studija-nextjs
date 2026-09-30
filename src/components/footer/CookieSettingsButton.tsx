'use client';
import React from 'react';
import style from './Footer.module.css';
import { OPEN_CONSENT_EVENT } from '../consent';

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className={style.cookieButton}
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    >
      Slapukų nustatymai
    </button>
  );
}
