import React from "react";
import "../styles/Nav.css"
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div>
    <nav className="loggedInNav">
      <NavLink to="/feed" className="navTitles">Home</NavLink>
      <NavLink to="/dashboard" className="navTitles">Dashboard</NavLink>
      <button className="signOutButton">Sign Out</button>
    </nav>

    </div>
  );
}

export default Nav;
