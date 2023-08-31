import React, { useState } from 'react'
import styled from 'styled-components';
import { BurguerButton } from './BurguerButton';


export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () =>{
    setClicked(!clicked)
  }
  return(
    <>
      <NavContainer className={`sticky ${clicked ? 'active' : ''}`} >
        <h2> Jhon <span> Cabrera </span> </h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href='/inicio' >Inicio</a>
          <a href="/portafolio" >Portafolio</a>
          <a href='/experiencia' >Experiencia</a>
          <a href='/conoceme' >Conóceme</a>
        </div>
        <div className='burguer' >
          <BurguerButton clicked={clicked} handleClick={handleClick}  ></BurguerButton>
        </div>
        <BgDiv className={`initial ${clicked ? 'active':''}`} ></BgDiv>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  h2{
    margin : 10px;
    color: white;
    font-weight:400;
    span{
      font-weight:bold;
    }
  }
  height: 100px;
  padding: .4rem;
  background-color: black;
  display: flex;
  align-items:center;
  justify-content: space-between;
  a{
    font-size: 2rem;
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    transition: color 0.3s ease; 
  }
  .links{
    position: absolute;
    top: -800px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
      color: black;
      font-size: 2rem;
      display:block;
      transition: color 0.3s ease;
      &:hover {
        color: #FF5733; /* Cambia el color a naranja cuando pasas el mouse sobre el enlace */
      }
    }
    @media(min-width: 800px){
      position: initial;
      margin: 0;
      a{
        font-size: 25px;
        color: white;
        display: inline;
      }
    }
  }
  .links.active{
    z-index: 2;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align:center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    z-index: 2;
    @media(min-width: 900px){
      display: none;
    }
  }
`

const BgDiv = styled.nav`
  background-color: #222;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0; /* Agrega esto */
  pointer-events: none; /* Agrega esto para que no interfiera con los eventos del mouse */
  transition: all .6s ease;
  &.active {
    
    border-radius: 0 0 80% 0;
    opacity: 1; /* Mostrar cuando está activo */
    pointer-events: auto; /* Permitir interacciones cuando está activo */
  }
`;





