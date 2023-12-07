import React from 'react';
import './SignUp.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";


function SignUp() {
  return (
    <div className="App">
         <Header />
      <form className="form">
        <h1>Sign Up</h1>
        <input className= "name_field_signup" type="text" placeholder="Full Name" required />
        <input className= "name_field_signup" type="email" placeholder="Email" required />
        <input className= "name_field_signup" type="password" placeholder="Password" required />
        <input className = "submit_signup" type="submit" value="Sign Up" />
        <a className= "forgot_password" href="/">Already have an account? Sign In</a>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
