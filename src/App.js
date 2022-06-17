import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterSuccess from "./pages/RegisterSuccess";
import TestPage from "./pages/TestPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

import "./style/main.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/registersuccess" component={RegisterSuccess} />
        <Route exact path="/testpage" component={TestPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
