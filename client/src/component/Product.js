import React from "react";
import { MyContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
const Product = ({ id }) => {
  const { product, setProduct, cart, setCart, qty, setQty } =
    useContext(MyContext);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/phone/${id}`).then((res) =>
      res.json().then((data) => {
        setProduct(data.items);
      })
    );
  }, []);
  const [value, setValue] = useState(product.qty);
  return (
    <div className="product">
      <article>
        <img src={product.image} alt="" />{" "}
        <div>
          <h4>
            {product.name} {product.model} <span></span>
          </h4>{" "}
          <p>{product.price}</p>
          <p>{product.description}</p>
          <div className="qty">
            {" "}
            {/* <button
              className="inc"
              onClick={() => {
                setQty(qty + 1);
              }}
              type="button"
            >
              +
            </button>
            {qty}
            <button
              onClick={() => {
                setQty(qty - 1);
              }}
              className="dec"
              type="button"
            >
              -
            </button> */}
          </div>
          <button
            type="button"
            onClick={() => {
              let items = {
                name: product.name,
                image: product.image,
                price: product.price,
                model: product.model,
                qty: product.qty,
              };
              setCart([...cart, items]);

              console.log(cart);
            }}
            className="add-to-cart"
          >
            Add to cart
          </button>
        </div>
      </article>
    </div>
  );
};

export default Product;
