import Gallery from './gallery'
import React from 'react';
// Nuotraukos tipo aprašymas
interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Nuotraukų masyvas
const photos: Photo[] = [
  { 
    id: '1', 
    src: '/photos/landscape1.jpg', 
    alt: 'Kraštovaizdis', 
    width: 1200, 
    height: 800 
  },
  { 
    id: '2', 
    src: '/photos/mountain2.jpg', 
    alt: 'Kalnai', 
    width: 1600, 
    height: 1000 
  }
]

export default async function GalleryPage() {
  return <Gallery photos={photos} />
}