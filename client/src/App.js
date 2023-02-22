import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import React, { useEffect, useState } from "react";
import { MyContext } from "./context/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Admin from "./admin/Admin";
import Post from "./admin/Post";
import Register from "./component/Register";
import Login from "./component/Login";
import Error from "./component/Error";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Footer from "./component/Footer";
import Catalogue from "./component/Catalogue";

function App() {
  const [menuNav, setMenuNav] = useState(false);
  const [product, setProduct] = useState({});
  const [pages, setPages] = useState();
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);
  const [checkout, setCheckout] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/phone/").then((res) =>
      res.json().then((data) => {
        setPages(data.items);
      })
    );
  }, []);
  pages && console.log(pages);
  return (
    <BrowserRouter>
      <div className="App">
        <MyContext.Provider
          value={{
            menuNav,
            setMenuNav,
            product,
            setProduct,
            cart,
            setCart,
            qty,
            setQty,
            checkout,
            setCheckout,
            filteredItems,
            setFilteredItems,
            datas,
            setDatas,
          }}
          menuNav
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/*   <Route path="/product" element={<Product />} /> */}

            {pages &&
              pages.map((item) => {
                return (
                  <Route
                    path={`/${item.name}${item.model}`}
                    element={<Product pages={pages} id={item._id} />}
                  />
                );
              })}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
