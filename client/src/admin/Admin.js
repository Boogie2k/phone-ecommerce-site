import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import { Link, Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./Items";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [post, setPost] = useState(false);
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();

  let populateQuote = async () => {
    await fetch("http:localhost/api/v1/quote", {
      headers: {
        "x-access-tokens": localStorage.getItem("token"),
      },
    }).then((res) => res.json().then((data) => console.log(data)));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user || user.email !== "oghosaedoma@gmail.com") {
        localStorage.removeItem("token");
        navigate("*", { replace: true });
      } else {
        /* populateQuote(); */
        console.log(user);
      }

      console.log(user);
    } else {
      navigate("/*", { replace: true });
      console.log("errr");
    }
  }, []);
  return (
    <div className="admin">
      {/*     <Navbar /> */}
      {/* <Post />
      llll
      <Items /> */}{" "}
      {!post && !add && (
        <section>
          <article
            onClick={() => {
              setPost(!post);
            }}
          >
            Add new Products
          </article>
          <article
            onClick={() => {
              setAdd(!add);
            }}
          >
            view All Products
          </article>
        </section>
      )}
      {post && !add && <Post />}
      {!post && add && <Items />}
    </div>
  );
};

export default Admin;
