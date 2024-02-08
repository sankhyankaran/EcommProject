import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [product, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

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
  }, []);

  const Product = (d) => {
    setProducts(
      data.filter(
        (f) =>
          f.category.includes(d.target.value) ||
          f.title.includes(d.target.value)
      )
    );
  };
  const Category = (e) => {
    setProducts(data.filter((f) => f.category.includes(e.target.value)));
  };

  return (
    <>
      <h1>Shopping</h1>
      <div>
        <input type="text" placeholder="Search" onChange={Product}></input>
      </div>
      <div className="select-product">
        <label htmlFor="category" className="m-2">
          Category :
        </label>
        <select id="category" name="Filter" onChange={Category}>
          <option></option>
          <option value=""> All Product</option>
          <option value="smartphones">Phone</option>
          <option value="fragrances">Perfume</option>
          <option value="skincare">Others</option>
        </select>
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

      {/* Category map array */}
      <span id="images">
        {category.map((item, index) => (
          <span key={index}>
            <img
              src={item.thumbnail}
              alt="Product image"
              height="20%"
              width="20%"
            />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
          </span>
        ))}
      </span>
    </>
  );
}

export default Home;
