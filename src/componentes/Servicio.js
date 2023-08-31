import React, { useState } from 'react';
import { data } from '../data/data';


export const Servicio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (slideIndex) => {
    if (slideIndex < 0) {
      setCurrentSlide(data.length - 1);
    } else if (slideIndex >= data.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(slideIndex);
    }
  };
  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };
  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
    <div className='page'>
      <div className="slider">
        {data.map((da, index) => (
          <article
            key={da.id}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className='hola'>
              <img className='img-servicio' src={"/images/" + da.src} alt={da.title} />
            </div>
          </article>
        ))}
        <button className='anterior' onClick={prevSlide}>Anterior</button>
        <button className='siguiente'  onClick={nextSlide}>Siguiente</button>
      </div>
      
    </div>
  );
};
