import React, { useState } from 'react';
import './Header.css';
import Menu from '../Menu/Menu.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="header-container">
      <header className="app-header">
        <div className="menu-icon" onClick={toggleMenu}>&#x2630;</div> {/* Hamburger icon */}
        <div className="logo" onClick={() => { window.location = "/" }}></div> {/* Logo */}
        <input className="search-input" type="text" placeholder="Search..." />
        <div className="user-profile"></div> {/* User profile */}
      </header>

      {isMenuOpen && <Menu />}
    </div>
  );
}

export default Header;