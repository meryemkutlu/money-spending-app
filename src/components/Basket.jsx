import { useState } from "react";
import BasketItem from "./BasketItem.jsx";

function Basket({ basket, total, products }) {
  return (
    <>
      {basket.map((item) => (
        <BasketItem
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      <div>Toplam: ${total}</div>
    </>
  );
}

export default Basket;
