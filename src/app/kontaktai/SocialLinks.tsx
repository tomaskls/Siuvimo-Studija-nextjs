import React from 'react';
import Image from 'next/image';
import style from './Contacts.module.css';

const socialLinks = [
  { name: 'Facebook', label: 'Sekite mus Facebook', url: 'https://www.facebook.com/neringossiuvimostudija', icon: '/icons/facebook_icon.png' },
  { name: 'Instagram', label: 'Instagram', url: 'https://www.instagram.com/neringossiuvimostudija', icon: '/icons/instagram_logo.webp' },
  { name: 'Pinterest', label: 'Pinterest', url: 'https://www.pinterest.com/neringossiuvimostudija', icon: '/icons/Pinterest.svg.png' },
];

export function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={style.fbLink}>
          <span>{link.label}</span>
          <Image src={link.icon} alt={link.name} width={24} height={24} />
        </a>
      ))}
    </>
  );
}
