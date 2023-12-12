// // ProfileDropdown.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ProfileDropdown.css';

// const ProfileDropdown = ({ isSignedIn, userName, onSignOut }) => {
//   return (
//     <div className="profile-dropdown">
//       {!isSignedIn ? (
//         <button onClick={() => {/* Sign-in logic */}}>Sign In</button>
//       ) : (
//         <>
//           <p>Hello, {userName}</p>
//           <Link to="/order-history">Order History</Link>
//           <Link to="/profile">Profile</Link>
//           <button onClick={onSignOut}>Sign Out</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;

// ProfileDropdown.js
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
          <Link to="/profile">Profile</Link>
          <button onClick={onSignOut}>Sign Out</button>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
