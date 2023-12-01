import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';

const Header = () => {

  return (
    <header className="app-header">
      <Menu />{/* Hamburger icon */}
      <div className="logo" onClick={()=>{window.location.href="/"}}></div> {/* Logo */}
      <input className="search-input" type="text" placeholder="Search..." />
      <button className="user-profile" onClick={()=>{window.location.href="/signin"}} /> {/* User profile */}
    </header>
  );
}

export default Header;
