import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Cart.css';
import {red} from '@mui/material/colors';
import { Link } from 'react-router-dom';


const Cart = ({ items, onRemoveItem }) => {
    return (
      <div className="cart-dropdown">
        <h2>Your Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
              {/* Assuming you have a remove item icon/button here */}
                <CloseIcon onClick={() => onRemoveItem(index)} sx={{ color: red[400]}} />
            </div>
          ))
        )}
  
        {items.length > 0 ? (
            <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
            </Link>
        ) : (
            <Link to="/signin">
          <button className="sign-in-button">Sign In</button>
            </Link>
        )}
      </div>
    );
  };
export default Cart;
