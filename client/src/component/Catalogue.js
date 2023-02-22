import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/context";

const Catalogue = () => {
  const { product, setProduct } = useContext(MyContext);
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("k" + window.innerWidth);
    fetch("http://localhost:5000/api/v1/phone/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="catalogue">
      {data &&
        data.items.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/${item.name}${item.model}`);
                setProduct({
                  image: item.image,
                  name: item.name,
                  price: item.price,
                  specs: item.specs,
                  model: item.model,
                  qty: item.qty,
                });
                console.log(product);
              }}
              className="phone-box"
            >
              <img src={item.image} alt="" />
              <div className="phone-details">
                {" "}
                <h4>{item.name}</h4>
                <h5>{item.model}</h5>
                <p>${item.price}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Catalogue;
