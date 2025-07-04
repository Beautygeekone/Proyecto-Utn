import React, { useState } from 'react';

export default function Carousel() {
  const images = [
    'https://a.mktgcdn.com/p/Md7GzXa_TYjEWKDYx8Fx90kpwQCvhv1igXfiirTBxP8/600x400.jpg',
    'https://static.scientificamerican.com/sciam/cache/file/C59B1FD1-2362-4259-A6D7C0DE2C249D39_source.jpg?w=600',
    'https://a.mktgcdn.com/p/RjrHSyQRXcmLe8f8F1NIGS3VdGQ52GNbuqMPlF47nH0/600x400.jpg',
    'https://static.scientificamerican.com/dam/m/609cb41e59a10a9a/original/Two_hands_holding_coffee_drinks.jpg?m=1723477795.996&w=600',
    'https://danes.com.au/cdn/shop/files/essence-of-espresso-barista-course_2048x.jpg?v=1697598454',
    'https://www.darkstarcoffee.com.au/cdn/shop/files/custom_resized_59378c6f-4a2d-4634-aa5f-b52bf762b745_600x.jpg?v=1639656915',
];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
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
