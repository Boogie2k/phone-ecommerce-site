import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  let registerUser = () => {
    fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        username: username,
      }),
    }).then((res) =>
      res.json().then((data) => {
        navigate("/login");
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
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          value={firstname}
        />{" "}
        <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          placeholder="lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
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
