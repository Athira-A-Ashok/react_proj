import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Users from "../Users/Users";
import { useHistory } from "react-router-dom";

function Landing() {
  var history = useHistory();
  var user_login = localStorage.getItem("user_login");

  useEffect(() => {
    if (!user_login) {
      history.push("/login");
    }
  });

  return (
    <div>
      <Navbar />
      <Banner />
      <Users />
      <Footer />
    </div>
  );
}

export default Landing;
