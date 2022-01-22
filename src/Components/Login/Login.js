import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Landing from "../Landing/Landing";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const history = useHistory();

  var a = { username, password };
  var reg_user = JSON.parse(localStorage.getItem("Users"));
  var i;

  function handleLogin() {
    for (i = 0; i < reg_user.length; i++) {
      if (
        username == reg_user[i].username &&
        password == reg_user[i].password
      ) {
        localStorage.setItem("user_login", JSON.stringify(a));
        history.push("/");
      } else {
        setError(true);
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container1">
        <h3>LOGIN</h3>
        {error ? <p style={{ color: "red" }}>Invalid Credentials</p> : null}
        <input
          type="username"
          name="username"
          placeholder="UserName"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit" onClick={handleLogin}>
          Login
        </button>
        <div className="account">
          <span>
            Dont have an account? <Link to="/register">SignUp</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
