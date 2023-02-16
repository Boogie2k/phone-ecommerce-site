import React, { useState } from "react";
import jwtDecode from "jwt-decode";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*  const handleLogin = (token) => {
   
    // Other login logic...
    console.log(localStorage);
  }; */

  let registerUser = () => {
    fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,

        password: password,
      }),
    }).then((res) =>
      res.json().then((data) => {
        if (data.items) {
          alert("login successful");
          /*  console.log(data); */
          localStorage.setItem("token", data.items);
          /* console.log(localStorage); */

          const admin = jwtDecode(data.items);
          console.log(admin);
          if (admin.email === "oghosaedoma@gmail.com") {
            window.location.href = "/admin";
          } else {
            window.location.href = "/";
          }
        } else {
          alert("check datails");
        }
      })
    );
  };

  return (
    <div style={{}} className="register">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      ;{" "}
    </div>
  );
};

export default Register;
