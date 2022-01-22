import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usersURL } from "../API/APIService";
import Card from "@material-ui/core/Card";
import "./UserDetails.css";
import "./UserDetails.css";
import Navbar from "../Navbar/Navbar";

function UserDetails() {
  const id = useParams();
  var x = [];

  const [userdetails, setUserdetails] = useState([]);

  useEffect(() => {
    axios.get(`${usersURL}/${id["id"]}`).then((res) => {
      console.log("res.data--", res.data);
      setUserdetails(res.data);
    });
  }, []);
  x.push(userdetails);
  console.log("this is x", x);

  return (
    <div>
      <Navbar />
      <div className="App">
        {x.map((data, i) => (
          <div className="det" key={i}>
            <Card className="ard">
              <p>Name:{data.name}</p>
              <p>Username:{data.username}</p>
              <p>Email:{data.email}</p>
              <div>
                <p>Street:{data.address.street}</p>
                <p>Suite:{data.address.suite}</p>
                <p>City:{data.address.city}</p>
                <p>Zipcode:{data.address.zipcode}</p>
                <p>Lat:{data.address.geo.lat}</p>
                <p>Lng:{data.address.geo.lng}</p>
                <p>Phone:{data.phone}</p>
                <p>Website:{data.website}</p>
                <p>CompanyName:{data.company.name}</p>
                <p>CatchPhrase:{data.company.catchPhrase}</p>
                <p>Bs:{data.company.bs}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
