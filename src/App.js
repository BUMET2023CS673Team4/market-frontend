import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepaage";
import Electronics from "./Categorires/Electronics/Electronics";
import Textbooks from "./Categorires/Textbooks/Textbooks";
import Funiture from "./Categorires/Forniture/Forniture";
import ElectronicsItem from "./Categorires/Electronics/ElectronicsItem";
import FornitureItem from "./Categorires/Forniture/FornitureItem";
import TextbooksItem from "./Categorires/Textbooks/TextbooksItem";
import FornitureDetail from "./Categorires/Forniture/FornitureDetail";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Checkout from "./Pages/Checkout/Checkout";
import AccountDetails from "./Pages/AccountDetails/AccountDetails";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";



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
          <Route path ="/forgotpassword" element = {<ForgotPassword/>}/>
          <Route path ="/checkout" element = {<Checkout/>}/>
          <Route path ="/accountdetails" element = {<AccountDetails/>}/>
          <Route path ="/orderhistory" element = {<OrderHistory/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

