import React from 'react';
import './Header.css';
<<<<<<< HEAD:src/Header/Header.js
import Menu from '../Menu/Menu';
=======
import Menu from "../Menu/Menu.js"
>>>>>>> 2a62763 (Switching to codecommit):src/Components/Header/Header.js

const Header = () => {

<<<<<<< HEAD:src/Header/Header.js
  return (
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


return (
  <div className="header-container">
>>>>>>> 2a62763 (Switching to codecommit):src/Components/Header/Header.js
    <header className="app-header">
      <Menu />{/* Hamburger icon */}
      <div className="logo" onClick={()=>{window.location.href="/"}}></div> {/* Logo */}
      <input className="search-input" type="text" placeholder="Search..." />
      <button className="user-profile" onClick={()=>{window.location.href="/signin"}} /> {/* User profile */}
    </header>
  );
}

export default Header;
