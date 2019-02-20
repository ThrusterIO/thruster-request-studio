import { Route, Switch } from "react-router-dom";
import React             from "react";
import MainPage from "../pages/Main";

const routes = () => (
  <Switch>
    <Route exact path="/" render={MainPage} />
  </Switch>
);

export default routes;
