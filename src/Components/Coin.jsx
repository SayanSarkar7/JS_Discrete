import React from "react";

const Coin = ({ name, symbol, imgSrc, price }) => {
  return (
    <div className="coin">
      <img src={imgSrc} alt={name} />
      <h1>{name}</h1>
      <p>{symbol}</p>
      <h4>₹{price}</h4>
    </div>
  );
};

export default Coin;
