import React, { useEffect, useState, useReducer } from "react";

const Items = () => {
  const [phones, setPhones] = useState();
  const [ids, setIds] = useState();
  const [form, setForm] = useState(false);
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

  const updateItem = (_id) => {
    phones &&
      fetch(`https://nebtechserver.onrender.com/api/v1/phone/${ids}`, {
        method: "PATCH",
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
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
        })
      );
  };

  const getSingleItem = (_id) => {
    fetch(`https://nebtechserver.onrender.com/api/v1/phone/${_id}`).then(
      (res) =>
        res.json().then((data) => {
          setPhones(phones.filter((phone) => phone._id == _id));
        })
    );
  };

  const handleDelete = (_id) => {
    phones &&
      fetch(`https://nebtechserver.onrender.com/api/v1/phone/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) =>
        res.json().then((data) => {
          setPhones(phones.filter((phone) => phone._id !== _id));
        })
      );
  };
  useEffect(() => {
    fetch("https://nebtechserver.onrender.com/api/v1/phone").then((res) =>
      res.json().then((data) => setPhones(data.items))
    );
  }, []);

  return (
    <>
      <div className="arrivals items-products">
        {phones &&
          phones.map((item) => {
            return (
              <section key={item._id}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <h5>{item.model}</h5>
                <button onClick={() => handleDelete(item._id)}>remove</button>
                <button
                  onClick={() => {
                    setForm(!form);
                    getSingleItem(item._id);
                  }}
                >
                  get
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setIds(item._id);
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
                      updateItem(item._id);
                    } else {
                      console.log("name is empty");
                    }
                  }}
                >
                  get
                </button>
              </section>
            );
          })}
      </div>
      {form && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            {" "}
            <h4>image:</h4>{" "}
            <input
              type="text"
              onChange={(e) => {
                dispatch({ type: "IMAGE", payload: e.target.value });
              }}
              value={state.image}
              name="image"
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
        </form>
      )}
    </>
  );
};

export default Items;
