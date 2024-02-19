import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

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
      <div className="background">
        <div className="hero-tag">
          <p>
            You are on amazon.com.You can also shop on Amazon india for millions
            of products that fast local delivery .
            <a href="https://www.amazon.in/">Welcome to amazon.in </a>
          </p>
        </div>
        <div className="search-bar">
          <input
            className="search "
            type="text"
            placeholder="Search Amazon"
            onChange={Product}
          />
          <div className="select">
            <select id="category" name="Filter" onChange={Category}>
              <option value=""> All Product</option>
              <option value="smartphones">Phone</option>
              <option value="laptops">Laptop</option>
              <option value="fragrances">Perfume</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Others</option>
            </select>
          </div>
        </div>
      </div>

      <div id="box">
        {product.map((d, index) => (
          <Link className="link" to={`/detail/${d.id}`} key={index}>
            <img
              src={d.thumbnail}
              alt="Product image"
              height="20%"
              width="20%"
            />
            <p>{d.title}</p>
            <p>₹{d.price}</p>
            <p>{d.category}</p>
          </Link>
        ))}
      </div>

      <div id="box">
        {category.map((item, index) => (
          <Link key={index}>
            <img
              src={item.thumbnail}
              alt="Product image"
              height="20%"
              width="20%"
            />
            <p>{item.title}</p>
            <p>₹{item.price}</p>
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
