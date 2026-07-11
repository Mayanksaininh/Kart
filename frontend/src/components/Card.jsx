import React from "react";

const Card = ({ name, price, image }) => {
  return (
    <div className="w-[200px] bg-slate-900 rounded-lg p-3 text-white shadow-md hover:scale-105 transition">
      <img
        src={image}
        alt={name}
        className="w-full h-[150px] object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-sm text-gray-300">₹{price}</p>
    </div>
  );
};

export default Card;