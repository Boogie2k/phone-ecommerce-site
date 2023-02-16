import React from "react";
import { MyContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";

const Cart = () => {
  const { cart, qty, setCart, setCheckout, checkout } = useContext(MyContext);
  const navigate = useNavigate();

  let fee = 0;

  let sum = 0;
  cart.map((item) => {
    const { price } = item;

    return (sum += price * qty);
  });
  return (
    <div className="cart">
      <h4>Cart</h4>
      <hr />
      <div>
        {" "}
        {cart &&
          cart.map((item) => {
            return (
              <article>
                {" "}
                <img src={item.image} />
                <div className="cart-details">
                  <h4>
                    {item.name} <span>{item.model}</span>
                  </h4>
                  <p>{item.price * qty}</p>
                </div>
              </article>
            );
          })}
      </div>

      <article className="cart-totals">
        <h4>Cart Totals</h4>
        <div>
          <p>Subtotal </p>
          <p>{sum}</p>
        </div>
        <div>
          <p>Shipping fee </p>
          <p>{fee}</p>
        </div>
        <div>
          <p>Total </p>
          <p>{sum + fee}</p>
        </div>
      </article>

      <button
        className="button"
        onClick={() => {
          setCheckout([...checkout, cart]);
          navigate("/checkout");
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Cart;
