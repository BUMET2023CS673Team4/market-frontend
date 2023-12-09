import React, { useState } from 'react';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCategory: null,
    };
    this.data = {};
  }

  componentDidMount = async () => {
    await fetch('/api/categories/').then(res => res.json()).then(data => {
      this.data.categories = data['categories'];
    });
  }

  toggleCategory = (item) => {
    if (this.state.openCategory === item) {
      this.setState({openCategory: null});
    } else {
      this.setState({openCategory: item});
    }
  }

  render() {
    let categories = this.data.categories || [];
    let categories_names = [];
    for (let i = 0; i < categories.length; i++) {
      categories_names.push(categories[i]['name']);
    }

    const menuItems = {
      'Categories': {
        subItems: categories_names, // Add your subcategories here
      },
      'All Products': {},
      'Cart': {},
      'Account': {
        subItems: ['ORDER HISTORY', 'PROFILE'], // Add your account options here
      }
    };

    return (
      <div className="menu">
        {Object.entries(menuItems).map(([item, details], index) => (
          <div key={index} className="menu-category">
            <button 
              className="menu-item" 
              onClick={() => this.toggleCategory(item)}
              data-has-subcategories={!!details.subItems}
            >
              {item}
            </button>
            {this.state.openCategory === item && details.subItems && (
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
        <button className="sign-out-button" onClick={() => {window.location="/signin"}}>
          SIGN OUT / SIGN IN
        </button>
      </div>
    );
  }
}

export default Menu;