
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import React, { useState } from "react";


import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen} from "./Icon"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link  to="/" className="nav-logo">
            <span>Stockify</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                
                to="/home"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
              exact="true"
                to="/subscription"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Subscription
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
              exact="true"
                to="/adminLogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Admin
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                exact="true"
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>

            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;