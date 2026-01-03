'use client'
import React, { useState } from 'react'

const images = [
  {
    src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel1.jpg',
    alt: 'nature',
  },
  {
    src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel2.jpg',
    alt: 'Beach',
  },
  {
    src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel3.jpg',
    alt: 'Yak',
  },
  {
    src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel4.jpg',
    alt: 'Hay',
  },
  {
    src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel5.jpg',
    alt: 'Plants',
  },
  {
    src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel6.jpg',
    alt: 'Building',
  },
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1));
  };
   
  return (
    <div className='bg-green-200 min-h-screen flex flex-col justify-center items-center gap-4'>
      <div className='relative w-[500px] h-[300px]'>
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className='w-full h-full object-cover rounded-md shadow-md'
        />
        <button
          onClick={handlePrev}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl bg-white rounded-full p-2 shadow'
        >
          ⬅️
        </button>
        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl bg-white rounded-full p-2 shadow'
        >
          ➡️
        </button>
      </div>

    
      <div className='flex gap-2 mt-4'>
        {Array.from({ length: totalImages }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              idx === currentImageIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
