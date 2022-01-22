import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import "./Users.css";
import { Link } from "react-router-dom";
import { usersURL } from "../API/APIService";

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(usersURL).then((res) => {
      setUsers(res.data);
    });
  });

  return (
    <div className="main">
      <h1 className="heading">Users</h1>
      {users.map((data) => {
        return (
          <Card
            style={{ backgroundColor: "wheat" }}
            className="card"
            key={data.id}
          >
            <h1>{data.name}</h1>
            <h2>{data.email}</h2>
            <Link to={`/userdetails/${data.id}`}>User Details</Link>
          </Card>
        );
      })}
    </div>
  );
}

export default UserDetails;
