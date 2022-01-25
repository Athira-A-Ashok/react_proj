import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  var history = useHistory();
  var isAuthenticated = false;
  let username = localStorage.getItem("user_login");
  const [registerbtn, setRegisterbtn] = useState();
  const [loginbtn, setLoginbtn] = useState();

  if (username) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  function logoutFun() {
    localStorage.removeItem("user_login");
    history.push("/login");
  }

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Logo
        </Link>
      </div>
      <div>
        {!isAuthenticated ? (
          <>
            <button>
              <Link
                style={{ color: "black", fontWeight: "bold" }}
                to="/register"
              >
                {" "}
                SIGN UP
              </Link>
            </button>
            <button>
              <Link style={{ color: "black", fontWeight: "bold" }} to="/login">
                LOGIN
              </Link>
            </button>
          </>
        ) : (
          <p className="logout" onClick={logoutFun}>
            Logout
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;