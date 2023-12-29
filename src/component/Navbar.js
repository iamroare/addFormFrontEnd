
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/addForm" className="nav-link">
            Add Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/viewForm" className="nav-link">
            View Form
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
