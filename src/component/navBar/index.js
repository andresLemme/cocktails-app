import React from 'react'
import { Link } from 'react-router-dom'
import navBar from './navBar.css'

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="nav-center">
      <Link to="/">
        <img src="" alt="Cocktail db logo" className="logo"/>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
    </nav>
  )
}
