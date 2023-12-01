import React from 'react';
import './SignUp.css';

function ForgotPassword() {
  return (
    <div className="App">
      <form className="form-signin">
        <h1>Forgot Password?</h1>
        <input type="email" placeholder="Email" required />
        {/* <input type="password" placeholder="Password" required /> */}
        <input type="submit" value="Send Email" />
        <a href="/signin">Sign In Instead</a>
        {/* <a href="/forgotpassword">Forgot Password?</a> */}
      </form>
    </div>
  );
}

export default ForgotPassword;
