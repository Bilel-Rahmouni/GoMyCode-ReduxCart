import React from "react";
import "../App.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt="" style={{ width: "40px", height: "40px" }} />

        <a className="navbar-brand" href="/">
          Lamma
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="navItem">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/events" className="text-decoration-none">
                <li className="navItem nav-item nav-link">Events</li>
              </Link>
              <Link to="/groups" className="text-decoration-none">
                <li className="navItem nav-item nav-link">Groups</li>
              </Link>
              <Link to="/shop" className="text-decoration-none">
                <li className="navItem nav-item nav-link">Shop</li>
              </Link>
              <Link to="/contact" className="text-decoration-none">
                <li className="navItem nav-item nav-link">Contact</li>
              </Link>
              <Link to="/login" className="text-decoration-none" id="loginLink">
                <li className="navItem nav-item nav-link">Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default navbar;
