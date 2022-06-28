import axios from "axios";
import React, { useState } from "react";

const AddAdmins = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    let postData = {
      username: userName,
      firstname: firstName,
      lastname: lastName,
    };
    axios.post(`http://localhost:4000/admins`, postData);
    setFirstName("");
    setLastName("");
    setUserName("");
  };
  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          name="firstname"
          autoComplete="off"
          value={firstName}
          placeholder="Firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastname"
          autoComplete="off"
          value={lastName}
          placeholder="Lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default AddAdmins;
