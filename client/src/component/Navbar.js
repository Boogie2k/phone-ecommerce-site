import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/context";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setMenuNav, menuNav } = useContext(MyContext);
  let [storing, setStoring] = useState();
  const [user, setUser] = useState();

  const stores = () => {
    const names = localStorage && jwtDecode(localStorage.token);
    localStorage && setStoring(names);
  };

  useEffect(() => {
    storing && stores();
  }, []);

  /*  console.log(storing); */
  let reSize = () => {
    setMenuNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMenuNav(false);
    });
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/register").then(
      (res) =>
        res.json().then((data) => {
          let news = data.items.filter((item) => item.email == storing.email);
          console.log(news);
          setUser(news);

          localStorage.setItem("users", user);
        })
      /*  .catch((err) => {
          console.log(err);
        }) */
    );
  }, []);
  /*  console.log(localStorage);
   */

  console.log(user);
  return (
    <section className="nav">
      <nav>
        <Link to="/">
          {" "}
          <h2>NebTech</h2>{" "}
        </Link>{" "}
        <ul>
          <a href="#">
            {" "}
            <li> Home</li>
          </a>
          <Link to="/catalogue">
            {" "}
            <li>Catalogue</li>
          </Link>

          <a href="#">
            {" "}
            <li>Contact</li>
          </a>
          <Link to="/cart">
            <li>cart</li>
          </Link>
        </ul>
        <article>
          {user ? (
            ""
          ) : (
            <a href="#">
              {" "}
              <h4>Sign in</h4>{" "}
            </a>
          )}
          {user ? (
            user.map((item) => {
              return <h4>HI, {item.username}</h4>;
            })
          ) : (
            <a href="#">
              {" "}
              <h4>Log in </h4>
            </a>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </article>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-list nav-menu"
          viewBox="0 0 16 16"
          onClick={() => setMenuNav(!menuNav)}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </nav>
      <ul style={{ display: menuNav ? "flex" : "none" }}>
        <a href="#">
          <li>Home</li>
        </a>{" "}
        <Link to="/catalogue">
          <li>Catalogue</li>
        </Link>
        <Link to="/cart">
          <li>cart</li>
        </Link>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>Sign up</li>
        </a>
        <a href="#">
          <li>Log in</li>
        </a>
      </ul>
    </section>
  );
};

export default Navbar;
