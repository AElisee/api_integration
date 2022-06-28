import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Admins</NavLink>
        </li>
        <li>
          <NavLink to="addAdmins">Ajouter</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
