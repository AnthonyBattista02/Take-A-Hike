import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

//import './Nav.css'

export default function Nav() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Event listener for Hamburger click
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    });

    // Event listeners for Nav links
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      });
    });

    // Clean up event listeners when the Component unmounts
    // return () => {
    //   hamburger.removeEventListener("click")
    //   document.querySelectorAll(".nav-link").forEach((navLink) => {
    //     navLink.removeEventListener("click")
    //   })
    //}
  }, [])

  return (
    <header>
      <div className="container">
        <div className="subcontainer">
          <nav className='nav'>
            <Link to="/" className='nav-branding'>Take A Hike!</Link>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <Link to='/user-trails' className='nav-link'>User Trails</Link>
              </li>
              <li className='nav-item'>
                <Link to='/trails' className='nav-link'>Trails</Link>
              </li>
              <li className='nav-item'>
                <Link to='/home' className='nav-link'>Home</Link>
              </li>
            </ul>
            <div className='hamburger'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
