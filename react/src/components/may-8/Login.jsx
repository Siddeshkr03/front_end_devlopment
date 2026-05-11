import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //handle user name
  const handleUser = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };

  // handle Password
  const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log("Submitting the value");
    navigate("/home");
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h4 className="input-label">User Name</h4>
        <input  className="input-text" type="text" id="un" value={userName} onChange={handleUser} />

        <h4 className="input-label">Password</h4>
        <input className="input-text"
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
