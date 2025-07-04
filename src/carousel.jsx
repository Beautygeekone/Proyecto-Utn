import React, { useState } from 'react';

export default function Carousel() {
  const images = [
    'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1047841233%2F221425170783%2F1%2Foriginal.20250606-235309?w=600&auto=format%2Ccompress&q=75&sharp=10&s=0ff834d047329f2daea4f529c2cf19ae',
    'https://static.scientificamerican.com/sciam/cache/file/C59B1FD1-2362-4259-A6D7C0DE2C249D39_source.jpg?w=600',
    'https://www.shutterstock.com/image-photo/cup-black-coffee-on-saucer-600nw-2413996125.jpg',
    'https://blogpackers.com/wp-content/uploads/2024/10/The-Best-Coffee-Packaging-Material.png',
    'https://static.scientificamerican.com/dam/m/609cb41e59a10a9a/original/Two_hands_holding_coffee_drinks.jpg?m=1723477795.996&w=600',
    'https://danes.com.au/cdn/shop/files/essence-of-espresso-barista-course_2048x.jpg?v=1697598454',
    'https://resourceboy.com/wp-content/uploads/2024/05/facing-vision-of-coffee-paper-bag-mockup-thumbnail.jpg',
];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }} className='carousel-container'>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={next} className="boton-siguiente">Siguiente</button>

      </div>
    </div>
  );
}
