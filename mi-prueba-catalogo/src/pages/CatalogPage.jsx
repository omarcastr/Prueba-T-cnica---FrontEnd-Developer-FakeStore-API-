import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import "../App.css";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">Cargando productos...</div>;
  if (error) return <div className="error-message">{error}</div>;

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de Productos</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={{ cursor: "pointer" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
