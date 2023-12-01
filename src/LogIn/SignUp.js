import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="App">
      <form className="form">
        <h1>Sign Up</h1>
        <input className= "name_field" type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Sign Up" />
        <a className= "forgot_password" href="/signin">Already have an account? Sign In</a>
      </form>
    </div>
  );
}

export default SignUp;
