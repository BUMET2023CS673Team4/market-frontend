import React from "react";
import "./SignIn.css";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { GetCookie } from '../../Utility/Cookie';

function SignIn() {

  return (
    <div className="App">
      <Header />

      <form className="form-signin" action="/api/login/" method="POST">
        <h1>Sign In</h1>
        <div className="fields">
          {GetCookie("csrftoken") && <input type="hidden" name="csrfmiddlewaretoken" value={GetCookie("csrftoken")}></input>}
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="submit" value="Sign In" />
        </div>

        <a href="/signup">Don't have an account? Sign Up</a>
        <a href="/forgotpassword">Forgot Password?</a>
      </form>

      <Footer />
    </div>
  );
}

export default SignIn;
