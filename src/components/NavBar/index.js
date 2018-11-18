import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../router/routes";
import './NavBar.css';

const NavBar = () => (
  <div className="menu">
    <ul>
      <li id="brand">
        <img src="../../../assets/images/logo.png"/>
        <span>MyDiary</span>
      </li>
      <li><a href="#">My entries</a></li>
      <li><a href="#">Write</a></li>
      <li><a href="#">Profile</a></li>
      <li className="right"><a href="#" id="logout">Logout</a></li>
      <li className="right"><Link to={ROUTES.auth.signUp}>Sign up</Link></li>
      <li className="right"><Link to={ROUTES.auth.login}>Sign in</Link></li>
    </ul>
  </div>
);

export default NavBar;
