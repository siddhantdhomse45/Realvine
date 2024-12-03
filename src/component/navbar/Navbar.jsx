import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div>
        <header className="header" data-header>
    <div class="container">

      <a href="#" className="logos">
        <ion-icon name="business-outline"></ion-icon> Realvine
      </a>

      <nav className="navbar container" data-navbar>
        <ul className="navbar-list">

          <li>
            <a href="#" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li>
            <a href="#" className="navbar-link" data-nav-link>Buy</a>
          </li>

          <li>
            <a href="#" className="navbar-link" data-nav-link>Sell</a>
          </li>

          <li>
            <a href="#" className="navbar-link" data-nav-link>Listing</a>
          </li>

          <li>
            <a href="#" className="navbar-link" data-nav-link>About Us</a>
          </li>

          <li>
            <a href="#" className="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>
      </nav>

      <a href="#" className="btn btn-secondary">Signup</a>

      <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true" className="menu-icon"></ion-icon>
        <ion-icon name="close-outline" aria-hidden="true" className="close-icon"></ion-icon>
      </button>

    </div>
  </header>


    </div>
  )
}

export default Navbar