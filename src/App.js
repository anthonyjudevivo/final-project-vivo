import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
      quantity: 10,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description:
        "High-quality wireless headphones with noise cancellation technology. Perfect for music lovers and professionals who need focus.",
      specifications:
        "Bluetooth 5.0, 30hr battery, Water-resistant, Active Noise Cancellation",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Sports",
      price: 79.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      description:
        "Professional running shoes designed for all terrains with superior comfort and durability.",
      specifications:
        "Size: 8-12, Colors: Black/Blue/Red, Material: Mesh & Rubber",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 149.99,
      quantity: 7,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      description:
        "Automatic coffee maker with programmable settings and built-in grinder.",
      specifications: "12-cup capacity, Stainless steel, Programmable timer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      quantity: 12,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      description:
        "Advanced smartwatch with health monitoring and notification features.",
      specifications: "OLED Display, Heart Rate Monitor, GPS, 7-day battery",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Yoga Mat",
      category: "Sports",
      price: 29.99,
      quantity: 4,
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400",
      description:
        "Premium non-slip yoga mat with extra cushioning for maximum comfort.",
      specifications: "6mm thickness, 72x24 inches, Eco-friendly TPE material",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Blender",
      category: "Home Appliances",
      price: 89.99,
      quantity: 8,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      description:
        "High-speed blender perfect for smoothies, soups, and sauces.",
      specifications: "1500W motor, 64oz pitcher, 8 speed settings",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Laptop",
      category: "Electronics",
      price: 899.99,
      quantity: 6,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      description: "High-performance laptop for work and entertainment.",
      specifications: 'Intel i7, 16GB RAM, 512GB SSD, 15.6" display',
      rating: 4.8,
    },
    {
      id: 8,
      name: "Backpack",
      category: "Sports",
      price: 49.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      description:
        "Water-resistant backpack with multiple compartments for organization.",
      specifications: "30L capacity, Laptop sleeve, Water-resistant fabric",
      rating: 4.1,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: products.length + 1,
      quantity: parseInt(newProduct.quantity),
      price: parseFloat(newProduct.price),
      rating: parseFloat(newProduct.rating),
    };
    setProducts([...products, productWithId]);
  };

  const updateQuantity = (productId, change) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          const newQuantity = Math.max(0, product.quantity + change);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const total = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <div className="app">
      <Header total={total} />

      <div className="main-container">
        {selectedProduct ? (
          <div className="product-detail-container">
            <button
              className="back-button"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back to Products
            </button>
            <ProductDetail product={selectedProduct} />
          </div>
        ) : (
          <>
            <div className="sidebar">
              <ProductForm addProduct={addProduct} />
            </div>

            <div className="content">
              <div className="filter-section">
                <h3>Filter by Category</h3>
                <div className="category-buttons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-btn ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <ProductList
                products={filteredProducts}
                updateQuantity={updateQuantity}
                onProductSelect={setSelectedProduct}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
