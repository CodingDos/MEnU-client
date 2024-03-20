import React from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div>
    <nav className="loggedInNav">
      <NavLink to="" className="navTitles">Home</NavLink>
      <NavLink to="" className="navTitles">Dashboard</NavLink>
      <button className="signOutButton">Sign Out</button>
    </nav>
    </div>
  );
}

export default Nav;
