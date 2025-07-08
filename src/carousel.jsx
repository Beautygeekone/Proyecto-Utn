import React, { useState } from 'react';

export default function Carousel() {
  const images = [
    'https://iili.io/FlL4Xl2.md.png',
    'https://monin.lat/cdn/shop/articles/21031-Monin-Social5337.jpg?v=1727368866&width=600',
    'https://static.scientificamerican.com/sciam/cache/file/C59B1FD1-2362-4259-A6D7C0DE2C249D39_source.jpg?w=600',
    'https://www.shutterstock.com/image-photo/cup-black-coffee-on-saucer-600nw-2413996125.jpg',
    'https://blogpackers.com/wp-content/uploads/2024/10/The-Best-Coffee-Packaging-Material.png',
    'https://static.scientificamerican.com/dam/m/609cb41e59a10a9a/original/Two_hands_holding_coffee_drinks.jpg?m=1723477795.996&w=600',
    'https://danes.com.au/cdn/shop/files/essence-of-espresso-barista-course_2048x.jpg?v=1697598454',
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
