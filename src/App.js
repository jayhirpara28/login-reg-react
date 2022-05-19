import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/pages/Contact";
import {Layout} from "./components/pages/Layout";
import Home from "./components/pages/Home";
import { LoginReg } from "./components/pages/auth/LoginReg";
import ResetEmail from "./components/pages/auth/ResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import DashBoard from "./components/pages/DashBoard";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<LoginReg />} />
          <Route path="resetemail" element={<ResetEmail />} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="*" element={<h1>Error 404 Page Not Found !</h1>} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
