import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import Star from "./Star";
function Detail() {
  const [data, setData] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(id, "id");

  const getData = async () => {
    try {
      const product = await axios.get(`https://dummyjson.com/products/${id}`);
      setData(product.data);
      setLoading(false);
      console.log(product.data, "data ==1");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleClick = () => {
    navigate("/addtocart");
  };

  return (
    <>
      <div className="detail-container">
       
        {/* Container div */}
        {loading ? (
          <div id="loader" style={{ display: "contents" }}>
            <ScaleLoader color="#36d7b7" />
          </div>
        ) : (
          <div id="image">
            <img src={data?.thumbnail} height="80%" width="80%" />
            <div className="discription">
              <ul>
                <li>{data?.description}</li>
                <li>{data?.brand}</li>
                <li>₹{data?.price}</li>
                <li>Discount : {data?.discountPercentage}%</li>
                <li>Stock : {data?.stock}</li>
                <li>
                  <Star  rating={data?.rating}/>
                </li>
              </ul>
              <button className="mt-2 btn btn-info" onClick={handleClick}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
