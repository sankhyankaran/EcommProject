import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [product, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        setProducts(res.data.products);
        console.log(res.data.products, "res data ===");
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const Product = (d) => {
    setProducts(
      data.filter(
        (f) =>
          f.category.includes(d.target.value) ||
          f.title.includes(d.target.value)
      )
    );
  };

  return (
    <>
      <h1>Shopping</h1>
      <div>
        <input type="text" placeholder="Search" onChange={Product}></input>
      </div>
      
      <span id="Images">
        {product.map((d, index) => (
          <span key={index}>
            <img
              id="images"
              src={d.thumbnail}
              alt="Product image"
              height="20%"
              width="20%"
            />
            <p>{d.title}</p>
            <p>{d.price}</p>
            <p>{d.category}</p>
          </span>
        ))}
      </span>
    </>
  );
}

export default Home;
