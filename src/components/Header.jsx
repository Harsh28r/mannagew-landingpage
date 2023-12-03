// eslint-disable-next-line no-unused-vars
import React from "react";

function Header() {
  return (
    <div className="Header">
      {/* Icon and brand Name */}
      <div className="logo">
        <img
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt="Logo"
          style={{ display: "block", width: "100", height: "100" }}
          className="image"
        />
        <h3>ManageWise</h3>
      </div>
      {/* Navbar */}
      <div className="nav">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <button>Buy Template</button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
