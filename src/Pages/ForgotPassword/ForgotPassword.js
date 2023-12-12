import React, { useState } from 'react';
import './ForgotPassword.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);
    // Proceed with form submission logic (e.g., reset password)
  };

  return (
    <div className="App" style={{ backgroundColor: '#212529', width: "100%" }}>
      <Header />
      <form className="form-forgotpassword" onSubmit={handleSubmit}>
        <div className="forgotpassword_content">
          <h1 className="forgotpassword_text">Forgot Password?</h1>

          <input 
            className="forgotpassword_input" 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            className="forgotpassword_input" 
            type="password" 
            placeholder="New Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <input 
            className="forgotpassword_input" 
            type="password" 
            placeholder="Confirm New Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          {!passwordsMatch && <p>Passwords do not match!</p>}
          <input className="forgotpassword_submit" type="submit" value="Confirm" />
          <a href="/signin">Sign In Instead</a>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
