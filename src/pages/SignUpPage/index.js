import React from 'react';
import NavBar from '../../components/NavBar';
import SignUpForm from "../../components/SignUpForm";

const SignUpPage = () => (
  <>
    <NavBar/>
    <div className="container">
      <div className="row">
        <div className="col-m6 col-m-offset-3">
          <div className="panel">
            <div className="panel-heading">Sign up</div>
            <div className="panel-body">
              <SignUpForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SignUpPage;
