'use client' // Svarbu, nes naudosime useState
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Gallery.module.css'

interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Gallery = ({ photos }: { photos: Photo[] }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div 
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className={styles.photoWrapper}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className={styles.photo}
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div 
          className={styles.lightbox}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className={styles.lightboxContent}>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery