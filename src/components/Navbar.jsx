import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-logo">
            <NavLink to=".">Color</NavLink>
          </div>
          <div className="nav-items">
            <ul>
              <li><NavLink to="home">Home</NavLink></li>
              <li><NavLink to="about">About</NavLink></li>
              <li><NavLink to="colors">Colors</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar