import React from "react";
import "../App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductCard;
