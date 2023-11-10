import { Link } from 'react-router-dom'
import React, { useState } from 'react'
//import axios from 'axios'
import '../App.css'
import Hamburger from './Hamburger.jsx'

const Nav = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='Nav'>
      <div className="hamburger-icon" onClick={toggleMenu}> 
      </div>

      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/trails">Trails</Link>
        <Link to="/Reviews">Reviews</Link>                             
      </div>
    </div>
  )
}

export default Nav