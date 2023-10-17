import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./LogIn/SignIn";
import SignUp from "./LogIn/SignUp";
import ForgotPassword from "./LogIn/ForgotPassword";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
  
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path ="/forgotpassword" element = {<ForgotPassword/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

