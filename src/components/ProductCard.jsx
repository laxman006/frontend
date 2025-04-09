import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-success">{product.price}</p>
        <a href={product.link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
