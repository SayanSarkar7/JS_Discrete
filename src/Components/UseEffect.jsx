import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";
import Loader from "./Loader";

const UseEffect = () => {
  // const arr=[1,2,3,4];
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
        );
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("not working");
      }
    };
    fetchCoin();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        coin.map((i) => (
          <Coin
            name={i.name}
            symbol={i.symbol}
            imgSrc={i.image}
            price={i.current_price}
            key={i.id}
          />
        ))
      )}
    </div>
  );
};

export default UseEffect;
