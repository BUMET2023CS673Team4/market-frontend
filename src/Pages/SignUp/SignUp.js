import React from 'react';
import './SignUp.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { GetCookie } from '../../Utility/Cookie';


function SignUp() {
  return (
    <div className="App">
         <Header />
      <form className="form" action="/api/signup/" method="POST">
        <h1>Sign Up</h1>
        {GetCookie("csrftoken") && <input type="hidden" name="csrfmiddlewaretoken" value={GetCookie("csrftoken")}></input>}
        <input className= "name_field_signup" name="name" type="text" placeholder="Full Name" required />
        <input className= "name_field_signup" name="email" type="email" placeholder="Email" required />
        <input className= "name_field_signup" name="password" type="password" placeholder="Password" required />
        <input className = "submit_signup" type="submit" value="Sign Up" />
        <a className= "forgot_password" href="/">Already have an account? Sign In</a>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
