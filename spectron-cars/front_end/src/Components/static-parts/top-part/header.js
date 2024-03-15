import React from "react";
import { FontAwesomeIcon } from "../../../fontawesome";
import { NavLink } from "react-router-dom";

export default function Header() {
  ////////////////////////////////////////
  return (
    <div className="header-main">
      <div className="header-left">
        <p>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </span>
          +967 77 777 7777
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-map" />
          </span>
          tunis street
        </p>
        {/* <p>Curuent day</p> */}
      </div>
      <div className="header-right">
        <FontAwesomeIcon className="header-icons" icon="fa-brands fa-github" />
        <FontAwesomeIcon
          className="header-icons"
          icon="fa-brands fa-facebook-f"
        />
        <FontAwesomeIcon
          className="header-icons"
          icon="fa-brands fa-instagram"
        />
        <FontAwesomeIcon
          className="header-icons"
          icon="fa-brands fa-linkedin-in"
        />
        <button className="login">Login</button>
        <button className="register">Register</button>
        <button className="dashboard_btn">
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/dashboard"
          >
            dashboard
          </NavLink>
        </button>
      </div>
    </div>
  );
}
