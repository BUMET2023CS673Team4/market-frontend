import React from "react";
import "./SignIn.css";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { GetCookie } from '../../Utility/Cookie';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isError: false,
      errorMessage: "",
    };
    this.SignInClicked = this.SignInClicked.bind(this);
  }

  SignInClicked = async (e) => {
    e.preventDefault();
    var form = document.querySelector('.form-signin');
    var data = new FormData(form);
    var formdata = "";
  
    data.forEach(function(value, key) {
      formdata += key + "=" + value + "&";
    });
    await fetch("/api/login/", {
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
        this.setState({ isError: true, errorMessage: "Invalid email or password" });
      }
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <form className="form-signin" action="/api/login/" method="POST">
          <h1>Sign In</h1>
          <div className="fields">
            {GetCookie("csrftoken") && <input type="hidden" name="csrfmiddlewaretoken" value={GetCookie("csrftoken")}></input>}
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            {this.state.isError && <div className="error-message">{this.state.errorMessage}</div>}
            <input type="submit" value="Sign In" onClick={this.SignInClicked}/>
          </div>
          <a href="/signup">Don't have an account? Sign Up</a>
          <a href="/forgotpassword">Forgot Password?</a>
        </form>
        <Footer />
      </div>
    );
  }
}

// function SignIn() {
//   return (
//     <div className="App">
//       <Header />
//       <form className="form-signin" action="/api/login/" method="POST">
//         <h1>Sign In</h1>
//         <div className="fields">
//           {GetCookie("csrftoken") && <input type="hidden" name="csrfmiddlewaretoken" value={GetCookie("csrftoken")}></input>}
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="password" placeholder="Password" required />
//           <input type="submit" value="Sign In" onClick={SignInClicked}/>
//         </div>
//         <a href="/signup">Don't have an account? Sign Up</a>
//         <a href="/forgotpassword">Forgot Password?</a>
//       </form>
//       <Footer />
//     </div>
//   );
// }
export default SignIn;