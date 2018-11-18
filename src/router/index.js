import React from "react";
import ROUTES from "./routes";
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import AuthenticatedRoute from "./AuthenticatedRoute";
import LandingPage from "../pages/LandingPage";
import SignUpPage from '../pages/SignUpPage'
import LoginPage from "../pages/LoginPage";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={ROUTES.index}
        component={LandingPage}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.auth.signUp}
        component={SignUpPage}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.auth.login}
        component={LoginPage}
      />
    </Switch>
  </BrowserRouter>
);
