import React, { useState } from 'react';
import { experiencia } from '../data/experiencia'

export const Experiencia = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='page'>
      <section className='works'>
        {experiencia.map((exp, index) => (
          <article
            key={exp.id}
            className={`work-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='mask'>
              <img src={"/images/" + exp.src} alt={exp.title} />
              <h1> {exp.descrip} </h1>
            </div>
            <div className="tags">
              {exp.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
