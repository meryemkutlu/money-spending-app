import React from "react";

function Product({ product, basket, setBasket }) {
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  return (
    <>
      <div className="product">
        <h6>{product.title}</h6>
        <div className="price">{product.price}$</div>
        <div className="action">
          <button>Sat</button>
          <span className="amount">0</span>
          <button onClick={addBasket}>Satin Al</button>
        </div>
        <style jsx>
          {`
            .product {
              padding: 10px;
              background: #fff;
              border: 1px solid #ddd;
              margin-bottom: 20px;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Product;
