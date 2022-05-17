import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const clicked=()=>{
    setDropdown(!dropdown);
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          S2D
          <i class="fab fa-firstdraft" /> Shop to Door
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            
          >
            {/* <Link to="/Orders" className="nav-links" onClick={closeMobileMenu}> */}
            <Link to="/Orders" className="nav-links" onClick={clicked}>
              Orders <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/userProfile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allUsers" className="nav-links" onClick={closeMobileMenu}>
              AllUsers-Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pendingPaymentsShopkeeper" className="nav-links" onClick={closeMobileMenu}>
              Pending Payments- shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allocateUser" className="nav-links" onClick={closeMobileMenu}>
              Allocate- shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pendingPayments"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              user-PP
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
