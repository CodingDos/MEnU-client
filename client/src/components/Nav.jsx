import React from "react";
import "../styles/Nav.css"
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div>
    <nav className="loggedInNav">
      <NavLink to="/home" className="navTitles">Home</NavLink>
      <NavLink to="/db" className="navTitles">Dashboard</NavLink>
      <button className="signOutButton">Sign Out</button>
    </nav>

    </div>
  );
}

export default Nav;
