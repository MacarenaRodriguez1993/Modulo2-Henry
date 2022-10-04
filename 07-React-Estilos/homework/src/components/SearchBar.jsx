import React from 'react';
import estilo from '../styles/Search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={estilo.container}>
      <input type="text" placeholder='Ciudad...' />
      <button onClick={()=>props.onSearch('buscando..')}>Agregar</button>
    </div>
  )
};