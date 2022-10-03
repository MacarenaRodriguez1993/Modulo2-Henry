import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <button onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div>
      <h4>Min - {props.min}</h4>
      <h4>Max - {props.max}</h4>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
    </div>
  </div>
};

