import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css';

const ProfileDropdown = ({ isSignedIn, userName, onSignIn, onSignOut }) => {
  return (
    <div className="profile-dropdown">
      {!isSignedIn ? (
        <button onClick={onSignIn}>Sign In</button>
      ) : (
        <>
          <p>Hello, {userName}</p>
          <Link to="/order-history">Order History</Link>
          <Link to="/accountdetails">Account Details</Link>
          <button onClick={onSignOut}>Sign Out</button>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
