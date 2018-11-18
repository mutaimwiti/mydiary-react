import React from "react";
import './LandingPage.css';
import {Link} from "react-router-dom";
import ROUTES from "../../router/routes";

const LandingPage = () => (
  <section>
    <header id="showcase">
      <h1>MyDiary</h1>
      <h2>You will never remember to forget.</h2>
      <div id="buttons">
        <Link to={ROUTES.auth.login}>Sign in</Link>
        <Link to={ROUTES.auth.signUp}>Sign up</Link>
      </div>
    </header>
  </section>
);

export default LandingPage;
