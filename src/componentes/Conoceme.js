import React, { useState } from 'react';
import { jhon } from '../data/jhon'

export const Conoceme = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='page'>
      <section className='works'>
        {jhon.map((jhon, index) => (
          <article
            key={jhon.id}
            className={`work-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='mask'>
              <img src={"/images/" + jhon.src} alt={jhon.title} />
            </div>
            <div>
              <h1>Holaa!!! Soy una persona muy motivadora y siempre con ganas de superar y explotar mis habilidades</h1>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
