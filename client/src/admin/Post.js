import React, { useReducer, useState } from "react";

const Post = () => {
  const [items, setItems] = useState();

  const values = {
    image: "",
    name: "",
    model: "",
    qty: 0,
    price: 0,
    tags: "",
    specs: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "IMAGE":
        return { ...state, image: action.payload };
      case "NAME":
        return { ...state, name: action.payload };
      case "MODEL":
        return { ...state, model: action.payload };
      case "QTY":
        return { ...state, qty: action.payload };
      case "PRICE":
        return { ...state, price: action.payload };
      case "TAGS":
        return { ...state, tags: action.payload };
      case "SPECS":
        return { ...state, specs: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, values);

  let creating = () => {
    fetch("http://localhost:5000/api/v1/phone", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        image: state.image,
        name: state.name,
        model: state.model,
        qty: state.qty,
        price: state.price,
        specs: state.specs,
      }),
    }).then((res) => res.json().then());
  };
  return (
    <div className="create">
      <form>
        <div>
          {" "}
          <h4>image:</h4>{" "}
          <input
            type="file"
            onChange={(e) => {
              dispatch({ type: "IMAGE", payload: e.target.value });
            }}
            value={state.image}
            name="image"
            accept="image/*"
          />
        </div>
        <div>
          {" "}
          <h4>Phone :</h4>{" "}
          <input
            onChange={(e) => {
              dispatch({ type: "NAME", payload: e.target.value });
            }}
            type="text"
            value={state.name}
            name="name"
          />
        </div>
        <div>
          {" "}
          <h4>Model:</h4>{" "}
          <input
            type="text"
            onChange={(e) => {
              dispatch({ type: "MODEL", payload: e.target.value });
            }}
            value={state.model}
            name="model"
          />
        </div>
        <div>
          {" "}
          <h4>quantity</h4>{" "}
          <input
            type="number"
            onChange={(e) => {
              dispatch({ type: "QTY", payload: e.target.value });
            }}
            value={state.qty}
            name="qty"
          />
        </div>{" "}
        <div>
          {" "}
          <h4>price</h4>{" "}
          <input
            type="number"
            onChange={(e) => {
              dispatch({ type: "PRICE", payload: e.target.value });
            }}
            value={state.price}
            name="price"
          />
        </div>
        <div>
          {" "}
          <h4>tags:</h4>{" "}
          <input
            type="text"
            onChange={(e) => {
              dispatch({ type: "TAGS", payload: e.target.value });
            }}
            value={state.tags}
            name="tags"
          />
        </div>
        <div>
          {" "}
          <h4>specs:</h4>{" "}
          <input
            type="text"
            style={{ minHeight: "9em" }}
            onChange={(e) => {
              dispatch({ type: "MAIN", payload: e.target.value });
            }}
            value={state.specs}
            name="SPECS"
          />
        </div>
        <input
          style={{ width: "4em", height: "4em" }}
          onClick={(e) => {
            e.preventDefault();
            if (state.name) {
              const person = {
                image: state.image,
                name: state.name,
                model: state.model,
                qty: state.qty,
                price: state.price,
                tags: state.tags,
                specs: state.specs,
              };
              console.log(person);
              creating();
            } else {
              console.log("name is empty");
            }
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Post;
