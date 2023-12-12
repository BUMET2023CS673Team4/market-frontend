import React, { useState , useEffect} from 'react';
import './Header.css';
import Menu from '../Menu/Menu.js';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person4Icon from '@mui/icons-material/Person4';
import Cart from '../Cart/Cart.js';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown.js';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: "Item 1", price: 10.99, image: "path_to_image1" },
  { name: "Item 2", price: 5.49, image: "path_to_image2" }
  ]);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  const handleRemoveItem = (index) => {
    const newItems = cartItems.filter((item, idx) => idx !== index);
    setCartItems(newItems);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    if (isMenuOpen) setIsMenuOpen(false);
    if (isCartOpen) setIsCartOpen(false);
  }
  

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isCartOpen && !document.querySelector('.cart-dropdown').contains(event.target)) {
        setIsCartOpen(false);
      }
      if (isProfileDropdownOpen && !document.querySelector('.profile-dropdown').contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isCartOpen || isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen]);
  

  const logoPath = '/buflea.png';

  const signIn = () => {
    setIsSignedIn(true);
    setUserName('John Doe'); 
  }
  
  const signOut = () => {
    setIsSignedIn(false);
    setUserName('');
  }
  

  return (
    <div className="header-container">
      <header className="app-header">
        <div className="menu-icon" onClick={toggleMenu}>&#x2630;</div> 

        <Link to="/">
          <img src={logoPath} alt="Logo" className="logo" />
        </Link>

        <input className="search-input" type="text" placeholder="Search..." />
        <div className="user-profile" onClick={toggleProfileDropdown}>
          <Person4Icon sx={{ fontSize: 28 }}/></div> {/* User profile */}
          {isProfileDropdownOpen && (
        <ProfileDropdown
        isSignedIn={isSignedIn}
        userName={userName}
        onSignIn={signIn}
        onSignOut={signOut}
      />
      
        )}
          
        {/* <Link to="/cart" > */}
        <div className="cart-icon" onClick={toggleCart}>
          <ShoppingCartIcon  sx={{ fontSize: 28} }/>
          </div>
        {/* </Link> */}
      
      </header>

      {isCartOpen && <Cart items={cartItems} onRemoveItem={handleRemoveItem} />}


      {isMenuOpen && <Menu />}

      
    </div>
  );
}

export default Header;