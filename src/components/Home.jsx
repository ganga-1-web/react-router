import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt="" />
            <h4>{p.title}</h4>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;