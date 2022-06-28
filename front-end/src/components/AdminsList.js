import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
// import env from "react-dotenv";

const AdminsList = () => {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admins")
      .then((res) => {
        setAdminList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className="adminlist">
      {adminList &&
        adminList.map((admin, index) => <Card key={index} admin={admin} />)}
    </ul>
  );
};

export default AdminsList;
