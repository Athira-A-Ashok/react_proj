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
  const [emailexist, setEmailexist] = useState(false);
  const [passwordexist, setPasswordexist] = useState(false);

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

      for (i = 0; i < user.length; i++) {
        // console.log("---",user[i].username)
        if (username == user[i].username) {
          setError(true);
          var flag = 1;
          break;
        } else if (email == user[i].email) {
          flag = 1;
          setEmailexist(true);
          break;
        } else if (password == user[i].password) {
          flag = 1;
          setPasswordexist(true);
          break;
        } else {
          flag = 0;
          setError(false);
        }
      }
    }
    if (flag == 1) {
      console.log("Invalid Credentials");
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
        {error ? (
          <p className="text-danger" style={{ color: "red" }}>
            User already exist!
          </p>
        ) : null}
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
        {emailexist ? (
          <p
            className="text-danger"
            style={{ color: "red", textAlign: "left" }}
          >
            email already exist
          </p>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordexist ? (
          <p
            className="text-danger"
            style={{ color: "red", textAlign: "left" }}
          >
            password already exist
          </p>
        ) : null}

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
