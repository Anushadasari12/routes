import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={{ pathname: "/" }}>Home</NavLink>
        </li>

        <NavLink to={{ pathname: "/Dashboard" }}>
          <li>Dashboard</li>
        </NavLink>
        <NavLink to={{ pathname: "/Aboutpage" }}>
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
