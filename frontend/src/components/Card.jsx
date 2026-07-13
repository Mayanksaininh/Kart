import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, price, image }) => {
  const navigate = useNavigate()
  return (
    <div className="w-[200px] bg-slate-900 rounded-lg p-3 text-white shadow-md hover:scale-105 transition" onClick={() => navigate(`/productdetail/${id}`)}>
      <img
        src={image}
        alt={name}
        className="w-full h-[220px] object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-sm text-gray-300">₹{price}</p>
    </div>
  );
};

export default Card;