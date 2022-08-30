import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../containers/Layout";
import { Checkout } from "../pages/Checkout/Checkout";
import { CreateAccount } from "../pages/CreateAccount/CreateAccount";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MyAccount } from "../pages/MyAccount/MyAccount";
import { NewPassword } from "../pages/NewPassword/NewPassword";
import { Orders } from "../pages/Orders/Orders";
import { RecoveryPassword } from "../pages/RecoveryPassword/RecoveryPassword";
import { SendEmail } from "../pages/SendEmail/SendEmail";
import { NotFound } from "../pages/NotFound/NotFound";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

import "../styles/global.scss";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>    
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
    </AppContext.Provider>
  );
};

export default App;
