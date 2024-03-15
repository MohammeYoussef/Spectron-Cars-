import React from "react";
import { FontAwesomeIcon } from "../../../fontawesome";
import { NavLink } from "react-router-dom";
import logo from "../../../images/static-parts/logo.png";
export default function Nav() {
  ////////////////////////////////////////////
  return (
    <div className="nav-main">
      <div className="nav-left">
        <img id="logo" src={logo} alt="" />
      </div>
      <div className="nav-right">
        <ul className="nav-ul">
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/listing"
          >
            Listing
          </NavLink>
          {/* <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/blog"
          >
            Blog
          </NavLink> */}
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/message-us"
          >
            Send Us Message
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/team"
          >
            Team
          </NavLink>
        </ul>
        <button className="nav-add-listing">
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li "
            to="/request-help"
          >
            Request Help
          </NavLink>
        </button>
        <button className="ham-menu">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
      </div>
    </div>
  );
}
