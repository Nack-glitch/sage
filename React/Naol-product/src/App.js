import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Naol Shop</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} 
            style={{ margin: "20px", border: "1px solid gray", padding: "10px" }}>
              <img 
              src={p.image} width="100" height="100" />
              <h4>{p.title}</h4>
              <p>${p.price}</p>
              <button>Buy now</button>
            </div>
          ))
        ) : (
          <p>No product found</p>
        )}
      </div>
    </div>
  );
}

export default App;
