import React, { useState } from 'react';
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='page'>
      <section className='works'>
        {trabajos.map((trabajo, index) => (
          <a
            key={trabajo.id}
            href={trabajo.href[1]} // Esta es la URL del repositorio
            className={`work-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='mask'>
              <img src={"/images/" + trabajo.src} alt={trabajo.title} />
            </div>
            <div className="tags">
              {trabajo.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};
