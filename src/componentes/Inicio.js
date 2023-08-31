import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Servicio } from './Servicio';
import { ListadoTrabajos } from './ListadoTrabajos'


export const Inicio = () => {
    const [showAlternateHeader, setShowAlternateHeader] = useState(false);
    const toggleHeader = () => {
        setShowAlternateHeader(!showAlternateHeader);
    }
    return (
        <div className='home'  >
            <div className='servicio' >
                <Servicio></Servicio>
            </div>
            <div className='intro'>
                {showAlternateHeader ? (
                    <h1 className='animated-header' onClick={toggleHeader}>
                        Soy un  <strong className='strong' > backend developer </strong> con más de 1
                        año de <strong className='strong' > experiencia </strong>. Mi enfoque es  desarrollar software altamente escalable con metodologías
                        ágiles.
                    </h1>
                ) : (
                    <h1 className='animated-header' onClick={toggleHeader}>
                        Hola, Soy <strong className='strong' > Joseph Cabrera  </strong>  soy desarrollador web y back end en Perú, y ofrezco mis
                        servicios de  programación  y <strong className='strong' > desarrollo </strong>  en todo tipo de proyectos Tecnológicos.
                        ágiles.
                    </h1>
                )}
            </div>
            <div className='intro2' >
                <h2 className='info' >Te ayudaré en proyectos de empresariales, requerimientos específicos de empresa o en crear tu sitio o aplicación web.
                    <a className='link' href="https://www.linkedin.com/in/jhon-joseph-cabrera-ojanama-086439252/"> Contacta Conmigo </a>
                </h2>
            </div>
        </div>
    );
};
