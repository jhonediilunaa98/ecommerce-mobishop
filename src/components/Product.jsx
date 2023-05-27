// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Productmodule.css'; // Archivo CSS para estilos de la tarjeta

const Product = () => {
  return (
    <article className="card">
      <img className='card-img' src= '/public/iphone14.webp' alt="iphone14" />
      <h2 className='text-title'>iphone14</h2>
      <p className='card-info'>xxxxxxxxxxxx</p>
      <button className='card-button'>comprar</button>
    </article>
  );
};

export default Product;