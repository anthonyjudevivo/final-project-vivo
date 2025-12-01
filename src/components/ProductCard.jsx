import React from "react";

const ProductCard = ({ product, updateQuantity, onProductSelect }) => {
  const subtotal = product.price * product.quantity;
  const isLowStock = product.quantity < 5;

  return (
    <div className={`product-card ${isLowStock ? "low-stock" : ""}`}>
      <div className="product-info">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onClick={() => onProductSelect(product)}
        />
        <div className="product-details">
          <h3 className="product-name" onClick={() => onProductSelect(product)}>
            {product.name}
          </h3>
          <span className="product-category">{product.category}</span>
          {isLowStock && <span className="low-stock-badge">Low Stock</span>}
        </div>
      </div>

      <div className="product-price">${product.price.toFixed(2)}</div>

      <div className="product-quantity">
        <div className="quantity-controls">
          <button
            onClick={() => updateQuantity(product.id, -1)}
            disabled={product.quantity <= 0}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>
      </div>

      <div className="product-subtotal">${subtotal.toFixed(2)}</div>

      <div className="product-actions">
        <button
          className="add-to-cart"
          onClick={() => alert(`Added ${product.name} to cart`)}
        >
          Add to Cart
        </button>
        <button
          className="view-details"
          onClick={() => onProductSelect(product)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
