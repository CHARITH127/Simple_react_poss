import React from "react";
import {Routes,Route} from 'react-router-dom';
import UserProfile from "../pages/UserProfile/userProfile";
import ProductManagement from "../pages/ProductManage/productManage";
import CartManagement from "../pages/CartManagement/cartManage";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
import LoginVerifing from "../pages/login/loginVerifing";

function App() {
  return (
      <Routes>
          <Route exact path='/' element={<LoginVerifing/>} />
          <Route exact path='reg' element={<RegisterForm/>} />
          <Route exact path='pro' element={<UserProfile/>} />
          <Route exact path='proManage' element={<ProductManagement/>} />
          <Route exact path='cartManage' element={<CartManagement/>} />
      </Routes>
  );
}

export default App;
