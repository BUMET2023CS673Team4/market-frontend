import React from 'react';
import './SignUp.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { GetCookie } from '../../Utility/Cookie';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isError: false,
      errorMessage: "",
    };
    this.SignUpClicked = this.SignUpClicked.bind(this);
  }

  SignUpClicked = async (e) => {
    e.preventDefault();
    var form = document.querySelector('.form-signup');
    var data = new FormData(form);
    var formdata = "";
  
    data.forEach(function(value, key) {
      formdata += key + "=" + value + "&";
    });
    await fetch("/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CSRFToken": GetCookie("csrftoken"),
      },
      body: formdata
    }).then((response) => {
      if (response.status === 200) {
        window.location = "/";
      } else {
        this.setState({ isError: true, errorMessage: "email invalid or already exist" });
      }
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <form className="form-signup" action="/api/signup/" method="POST">
          <h1>Sign Up</h1>
          <div className="fields">
            {GetCookie("csrftoken") && <input type="hidden" name="csrfmiddlewaretoken" value={GetCookie("csrftoken")}></input>}
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            {this.state.isError && <div className="error-message">{this.state.errorMessage}</div>}
            <input type="submit" value="Sign Up" onClick={this.SignUpClicked}/>
          </div>
          <a href="/signin">Already have an account? Sign In</a>
        </form>
        <Footer />
      </div>
    );
  }
}



// function SignUp() {
//   return (
//     <div className="App">
//          <Header />
//       <form className="form" action="/api/signup/" method="POST">
//         <h1>Sign Up</h1>
//         {GetCookie("csrftoken") && <input type="hidden" name="csrfmiddlewaretoken" value={GetCookie("csrftoken")}></input>}
//         <input className= "name_field_signup" name="name" type="text" placeholder="Full Name" required />
//         <input className= "name_field_signup" name="email" type="email" placeholder="Email" required />
//         <input className= "name_field_signup" name="password" type="password" placeholder="Password" required />
//         <input className = "submit_signup" type="submit" value="Sign Up" />
//         <a className= "forgot_password" href="/">Already have an account? Sign In</a>
//       </form>
//       <Footer />
//     </div>
//   );
// }

export default SignUp;
