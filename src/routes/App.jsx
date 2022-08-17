import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../containers/Layout";
import { Checkout } from "../pages/Checkout";
import { CreateAccount } from "../pages/CreateAccount";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MyAccount } from "../pages/MyAccount";
import { NewPassword } from "../pages/NewPassword";
import { Orders } from "../pages/Orders";
import { RecoveryPassword } from "../pages/RecoveryPassword";
import { SendEmail } from "../pages/SendEmail";
import { NotFound } from "../pages/NotFound";

import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/checkout" element={<Checkout />}/>
          <Route exact path="/create-account" element={<CreateAccount/>}/>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account" element={<MyAccount/>}/>
          <Route exact path="/new-password" element={<NewPassword />}/>
          <Route exact path="/orders" element={<Orders />}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route exact path="/send-email" element={<SendEmail />}/>
          <Route path="*" elemet={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
