import React,{useState} from 'react'
import { ListadoTrabajos } from './ListadoTrabajos'
export const Portafolio = () => {
  return (
    <div className='page' >
        <h1 className='heading' >
            Portafolio
        </h1>
        <div>
            <ListadoTrabajos></ListadoTrabajos>
        </div>
    </div>
  )
}
