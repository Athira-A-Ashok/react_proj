import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Users from "../Users/Users";

function Landing() {
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
