import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/context";

const Arrivals = () => {
  const { product, setProduct } = useContext(MyContext);

  const [data, setData] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    console.log("k" + window.innerWidth);
    fetch("http://localhost:5000/api/v1/phone/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const filt =
      data.items && data.items.filter((item) => item.tags === "best selling");
    setFilteredItems(filt);
    console.log(filteredItems);
  }, [data.items]);

  return (
    <section className="arrivals">
      <div>
        {" "}
        <h4>Best Selling</h4>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>

      <article>
        {filteredItems &&
          filteredItems.map((item) => {
            return (
              <section
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
              >
                <img src={item.image} alt="" />
                <div className="phone-details">
                  {" "}
                  <h4>{item.name}</h4>
                  <h5>{item.model}</h5>
                  <p>${item.price}</p>
                </div>
              </section>
            );
          })}
      </article>
    </section>
  );
};

export default Arrivals;
