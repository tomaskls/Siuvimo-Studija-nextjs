"use client";
import React from 'react';
import style from './Contacts.module.css';
import Image from 'next/image';

const fbIconPath = '/icons/facebook_icon.png';
const facebookUrl = 'https://www.facebook.com/neringossiuvimostudija';

export function FbLink() {
  return (
    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={style.fbLink}>
      <span>Sekite mus Facebook</span>
      <Image src={fbIconPath} alt="Facebook" width={24} height={24} />
    </a>
  );
}
const InstIconPath = '/icons/instagram_logo.webp';
const InstUrl = 'https://www.instagram.com/neringossiuvimostudija';

export function InstLink() {
  return (
    <a href={InstUrl} target="_blank" rel="noopener noreferrer" className={style.fbLink}>
      <span>Instagram</span>
      <Image src={InstIconPath} alt="Facebook" width={24} height={24} />
    </a>
  );
}
const PinIconPath = '/icons/Pinterest.svg.png';
const PinUrl = 'https://www.pinterest.com/neringossiuvimostudija';

export function PinLink() {
  return (
    <a href={PinUrl} target="_blank" rel="noopener noreferrer" className={style.fbLink}>
      <span>Pinterest</span>
      <Image src={PinIconPath} alt="Pinterest" width={24} height={24} />
    </a>
  );
}
