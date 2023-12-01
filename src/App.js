import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./LogIn/SignIn";
import SignUp from "./LogIn/SignUp";
import ForgotPassword from "./LogIn/ForgotPassword";
import Homepage from "./Homepage/Homepaage";
import Electronics from "./Categorires/Electronics/Electronics";
import Textbooks from "./Categorires/Textbooks/Textbooks";
import Funiture from "./Categorires/Forniture/Forniture";
import ElectronicsItem from "./Categorires/Electronics/ElectronicsItem";
import FornitureItem from "./Categorires/Forniture/FornitureItem";
import TextbooksItem from "./Categorires/Textbooks/TextbooksItem";
import FornitureDetail from "./Categorires/Forniture/FornitureDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path ="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/product/electronics" element={<Electronics />} />
          <Route path="/product/textbooks" element={<Textbooks />} />
          <Route path="/product/funiture" element={<Funiture />} />
          <Route path="/product/electronics/productlist" element={<ElectronicsItem />} />
          <Route path="/product/funiture/productlist" element={<FornitureItem />} />
          <Route path="/product/textbooks/productlist" element={<TextbooksItem />} />
          <Route path="/product/electronics/details" element={<FornitureDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

