import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Handle username
  const handleUser = (event) => {
    setUserName(event.target.value);
  };

  // Handle password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === "admin" && password === "admin") {
      alert("Login Successful");
      navigate("/home");
    } else {
      alert("Incorrect Username or Password");
    }
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h4 className="input-label">User Name</h4>

        <input
          className="input-text"
          type="text"
          id="un"
          value={userName}
          onChange={handleUser}
        />

        <h4 className="input-label">Password</h4>

        <input
          className="input-text"
          type="password"
          id="pw"
          value={password}
          onChange={handlePassword}
        />

        <input className="login" type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default Login;
