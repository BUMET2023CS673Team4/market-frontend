import React from 'react';
import './ForgotPassword.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";

function ForgotPassword() {
  return (
    <div className="App">
       <Header />
      <form className="form-forgotpassword">
        <div className="forgotpassword_content">
        <h1 className="forgotpassword_text">Forgot Password?</h1>
        <input className= "forgotpassword_input" type="email" placeholder="Email" required />
   
        <input className="forgotpassword_submit" type="submit" value="Send Email" />
        <a href="/signin">Sign In Instead</a>
      
        </div>
      </form>
      <Footer/>
    </div>
  );
}

export default ForgotPassword;
