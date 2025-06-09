import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


function navbar() {
  return (
    <div >
   <nav className="navbar navbar-expand-lg ">
  <div className="container justify-content-between">
    <div className="collapse navbar-collapse order-lg-2 justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav flex-row gap-4">
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to={'/portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to={'/Contact'}>Contact</Link>
        </li>
      </ul>
    </div>
    <a className="navbar-brand mx-auto text-white fw-bold text-uppercase order-lg-1" href="#">Start Bootstrap</a>
    <button className="navbar-toggler order-lg-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </div>
</nav>


    </div>

  );
}

export default navbar