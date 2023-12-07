import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const menuItems = {
    'Categories': {
      subItems: ['ELECTRONICS', 'TEXTBOOKS', 'FURNITURE'], // Add your subcategories here
    },
    'All Products': {},
    'Cart': {},
    'Account': {
      subItems: ['ORDER HISTORY', 'PROFILE'], // Add your account options here
    }
  };

  const toggleCategory = (item) => {
    if (openCategory === item) {
      setOpenCategory(null);
    } else {
      setOpenCategory(item);
    }
  };

  return (
    <div className="menu">
      {Object.entries(menuItems).map(([item, details], index) => (
        <div key={index} className="menu-category">
          <button 
            className="menu-item" 
            onClick={() => toggleCategory(item)}
            data-has-subcategories={!!details.subItems}
          >
            {item}
          </button>
          {openCategory === item && details.subItems && (
            <div className="dropdown">
              {details.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="dropdown-item">
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className="sign-out-button">SIGN OUT / SIGN IN</button>
    </div>
  );
};

export default Menu;