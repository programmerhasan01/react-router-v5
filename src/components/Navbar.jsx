import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{ fontWeight: "bold", color: "green" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/services"
              activeStyle={{ fontWeight: "bold", color: "green" }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              activeStyle={{ fontWeight: "bold", color: "green" }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
