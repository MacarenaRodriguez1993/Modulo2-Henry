import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city,setCity]=useState('');

  return (
    <form className="d-flex"onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e=>{
          setCity(e.target.value)
        }}
      />
      <button className="btn btn-outline-success" type="submit">Agregar</button>
    </form>
  );
}
