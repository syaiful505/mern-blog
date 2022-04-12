import React from "react";
import { Login, MainApp, Register } from "../../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
