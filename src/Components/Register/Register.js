import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import "./Register.css";
import Navbar from "../Navbar/Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(true);

  const history = useHistory();

  var user_details = { username, email, password };
  var array = JSON.parse(localStorage.getItem("Users"));
  console.log(array);
  let user = [];
  var i;

  useEffect(() => {}, [error]);

  function userDetails() {
    if (array != null) {
      for (i = 0; i < array.length; i++) {
        user.push(array[i]);
      }
      console.log("---", user[1].username);
      for (i = 0; i < user.length; i++) {
        // console.log("---",user[i].username)
        if (username == user[i].username) {
          setError(true);
          break;
        } else {
          setError(false);
        }
      }
    }
    if (error) {
      console.log("Invalid Credentials");
      alert("Invalid Credentials");
    } else {
      user.push(user_details);
      localStorage.setItem("Users", JSON.stringify(user));
      history.push("/login");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>REGISTER</h3>
        {error ? <p className="text-danger">User already exist!</p> : null}
        <input
          type="text"
          placeholder="UserName"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit" type="submit" onClick={userDetails}>
          Register
        </button>
        <div className="account">
          <span>
            Have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;