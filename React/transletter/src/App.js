import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // filter products by search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <header
        style={{
          background: "#222",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h2>SimpleShop</h2>
      </header>

      {/* Search bar */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Product grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <h4 style={{ fontSize: "16px", margin: "10px 0" }}>
                {product.title.slice(0, 25)}...
              </h4>
              <p style={{ fontWeight: "bold", color: "green" }}>
                ${product.price}
              </p>
              <button
                style={{
                  background: "#FF5722",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
