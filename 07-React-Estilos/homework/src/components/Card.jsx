import React from 'react';
import estilo from '../styles/Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
  <div className={estilo.tarjeta}>
    <button className={estilo.btn} onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div className={estilo.maximos}>
      <div>
        <h4>Min</h4>
        <h4>{parseInt(props.min-273.15)}°C</h4>
        
      </div>
      <div>
        <h4>Max</h4>
        <h4>{parseInt(props.max-273.15)}°C</h4>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
    </div>
  </div>)
};
/*
const divStyle={
  width:'40%',
  margin:'15px',
  padding:'15px',
  border :'1px solid gray'
}
const boton={
  backgroundColor:'red',
  border:'none',
  borderRadius:'5px',
  color:'white',
  padding:'5px 10px',
}
const divSegunda={
  display:'flex',
  justifyContent:'space-between',
}
const img={
  width:'80%'
}*/
