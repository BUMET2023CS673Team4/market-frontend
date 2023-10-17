import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="menu-icon">&#x2630;</div> {/* Hamburger icon */}
      <div className="logo"></div> {/* Logo */}
      <input className="search-input" type="text" placeholder="Search..." />
      <div className="user-profile"></div> {/* User profile */}
    </header>
  );
}

export default Header;
