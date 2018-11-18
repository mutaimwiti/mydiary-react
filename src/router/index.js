import React from "react";
import {LandingPage} from "../pages/LandingPage";
import ROUTES from "./routes";
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={ROUTES.index}
        component={LandingPage}
      />
    </Switch>
  </BrowserRouter>
);
