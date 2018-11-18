import React from 'react';
import NavBar from '../../components/NavBar';
import LoginForm from "../../components/LoginForm";

const LoginPage = () => (
  <>
    <NavBar/>
    <div className="row">
      <div className="col-m6 col-m-offset-3">
        <div className="panel">
          <div className="panel-heading">Sign up</div>
          <div className="panel-body">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default LoginPage;
