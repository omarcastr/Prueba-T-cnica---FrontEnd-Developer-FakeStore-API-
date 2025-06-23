import React, { useEffect, useState } from "react";
import "../App.css";

const ProductDetail = ({ product, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader">Cargando detalles del Producto...</div>;
  }

  return (
    <div className="product-detail-container">
      <button className="close-button" onClick={onClose}>← Volver</button>
      <div className="product-detail-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          <p>{product.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
