// import { Link } from "react-router-dom"

import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export default function Hamburger({ isOpen, toggleMenu }) {
  return (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>
  );
}

Hamburger.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}
  