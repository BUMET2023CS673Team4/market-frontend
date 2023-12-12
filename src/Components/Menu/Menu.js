import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const menuItems = {
    'Categories': {
      subItems: [       
        { name: 'ELECTRONICS', path: '/product/electronics' },
        { name: 'TEXTBOOKS', path: '/product/textbooks' },
        { name: 'FURNITURE', path: '/product/funiture' }
      ],
    },
    'All Products': { path: '/product/furniture' },
    'About Us': { path: '/about' },
    // 'Account': {
    //   subItems: [
    //     { name: 'ORDER HISTORY', path: '/order-history' },
    //     { name: 'PROFILE', path: '/profile' }
    //   ],
    // }
  };

  const toggleCategory = (item) => {
    if (openCategory === item) {
      setOpenCategory(null);
    } else if (menuItems[item].subItems) {
      setOpenCategory(item);
    }
  };

  return (
    <div className="menu">
      {Object.entries(menuItems).map(([item, details], index) => (
        <div key={index} className="menu-category">
          
          {details.subItems ? (
            <>
            
              <button 
                className="menu-item" 
                onClick={() => toggleCategory(item)}
                data-has-subcategories={!!details.subItems}
                
              >
                {item}
     
              
              </button>
              
              {openCategory === item && (
                <div className="dropdown">
                     
                  {details.subItems.map((subItem, subIndex) => (
                    <Link to={subItem.path} key={subIndex} className="dropdown-item">
                      {subItem.name}
                 
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link to={details.path} className="menu-item">
              {item}
       
            </Link>
           
          )}
        </div>
      ))}
      <button className="sign-out-button" onClick={() => {window.location="/signin"}}>
        SIGN OUT / SIGN IN
      </button>
    </div>
  );
};

export default Menu;
