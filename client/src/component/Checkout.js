import React from "react";
import { MyContext } from "../context/context";
import { useContext, useEffect, useState, useReducer } from "react";

import emailjs from "emailjs-com";

const Checkout = () => {
  const { cart, qty, setCart, setCheckout, checkout } = useContext(MyContext);
  let sum = 0;

  let finalLists;
  checkout.map((item) => (finalLists = item));

  console.log(finalLists);

  finalLists.map((item) => {
    const { price } = item;

    return (sum += price);
  });

  const [fullname, setFullname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [state, setState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_anfskt6",
        "template_ob4rxws",
        event.target,
        "rN075nTbsHHFAVFog"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((err) => console.log(err));
  };

  /*  */ return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <h2>Billing details</h2>
        <p>fullname*</p>
        <input
          type="text"
          /* value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }} */
          name="fullname"
        />
        <p>town/city*</p>
        <input
          type="text"
          /*  onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city} */
          name="city"
        />
        <p>state*</p>
        <input
          type="text"
          /*   onChange={(e) => {
            setState(e.target.value);
          }}
          value={state} */
          name="state"
        />
        <p>email*</p>
        <input
          type="text"
          /* onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email} */
          name="email"
        />
        <p>phone*</p>
        <input
          type="text"
          /*  onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone} */
          name="fullname"
        />{" "}
        {finalLists.map((item) => {
          return (
            <div>
              <input
                type="text"
                value={item.name + " " + item.model + " " + item.price}
                name="brand"
              />{" "}
            </div>
          );
        })}
        <button type="submit">Place order</button>
      </form>
      <h2>Your order</h2>
      <div className="checkout-order">
        <article>
          {" "}
          <h4 className="left">Product</h4> <h4 className="right">Total</h4>
        </article>
        {finalLists.map((item) => {
          return (
            <article>
              {" "}
              <p className="left">
                {item.name} {item.model}
              </p>{" "}
              <p className="right">{item.price}</p>
            </article>
          );
        })}
        <article>
          <h4 className="left">Total</h4> <h4 className="right">{sum}</h4>
        </article>
      </div>
      <div className="place-order">
        <p>
          Please contact us if you have any complaints or to make any additional
          changes
        </p>

        <button type="submit">Place order</button>
      </div>{" "}
    </div>
  );
};

export default Checkout;
