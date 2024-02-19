import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({rating}) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5;
  
  return (
    <>
      <span key={index}>
        {
        rating >= index + 1 ? (
          <FaStar className="icon" />
        ) : rating >= num ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    </>
  );
})
return (
    <>
    <div className="star">
        {ratingStar}
    </div>
    </>
    )}

export default Star;
