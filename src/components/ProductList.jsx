import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, updateQuantity, onProductSelect }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <div className="list-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
        <span>Actions</span>
      </div>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          updateQuantity={updateQuantity}
          onProductSelect={onProductSelect}
        />
      ))}
    </div>
  );
};

export default ProductList;
