import React, { useState } from "react";
import axios from "axios";

const Card = ({ admin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState("");
  const [editFirstname, setEditFirstname] = useState("");
  const [editLastname, setEditLastname] = useState("");
  const dbUrl = "http://localhost:4000/admins/";

  const handeDelete = () => {
    axios.delete(dbUrl + admin._id);
    window.location.reload();
  };

  const handleUpdate = (e) => {
    let editingData = {
      username: editUsername ? editUsername : admin.username,
      firstname: editFirstname ? editFirstname : admin.firstname,
      lastname: editLastname ? editLastname : admin.username,
      date: admin.date,
      updated: Date.now(),
    };
    axios.put(dbUrl + admin._id, editingData);
    window.location.reload();
    setIsEditing(false);
  };

  return (
    <li className="card">
      <div className="name">
        {isEditing ? (
          <input
            type="text"
            defaultValue={editUsername ? editUsername : admin.username}
            onChange={(e) => setEditUsername(e.target.value)}
          />
        ) : (
          <span>{admin.username}</span>
        )}

        {isEditing ? (
          <input
            type="text"
            defaultValue={editFirstname ? editFirstname : admin.firstname}
            onChange={(e) => setEditFirstname(e.target.value)}
          />
        ) : (
          <span>{admin.firstname}</span>
        )}

        {isEditing ? (
          <input
            type="text"
            defaultValue={editLastname ? editLastname : admin.lastname}
            onChange={(e) => setEditLastname(e.target.value)}
          />
        ) : (
          <span>{admin.lastname}</span>
        )}

        {/* <span>{admin.firstname}</span>
        <span>{admin.lastname}</span> */}
      </div>
      <div className="icons">
        {isEditing ? (
          <button onClick={(e) => handleUpdate(e)}>valider</button>
        ) : (
          <span>
            <i
              className="fa-solid fa-pen"
              onClick={(e) => setIsEditing(true)}
            ></i>
          </span>
        )}

        <span>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => {
              if (window.confirm("Voulez vous vraiment supprimer cet Admin")) {
                handeDelete();
              }
            }}
          ></i>
        </span>
      </div>
    </li>
  );
};

export default Card;
