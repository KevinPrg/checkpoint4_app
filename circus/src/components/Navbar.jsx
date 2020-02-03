import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="container">
      <ul className="ul">
        <Link to="/">
          <li>CIRCUS GAME</li>
        </Link>
      </ul>

      <div className="links">
        <ul className="ul2">
          <Link to="/games">
            <li className="li">GAMES</li>
          </Link>

          <Link to="/attractions">
            <li>ATTRACTIONS</li>
          </Link>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
