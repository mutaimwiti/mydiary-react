import React, {Component} from "react";

class SignUpForm extends Component {
  render() {
    return (
      <form id="sign_up_form">
        <div className="row">
          <div className="col-m4">
            <label htmlFor="name">Name</label>
          </div>
          <div className="col-m8">
            <input type="text" required id="name" name="name" placeholder="Enter your name..."/>
          </div>
        </div>
        <div className="row">
          <div className="col-m4">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-m8">
            <input type="email" required id="email" name="email" placeholder="Enter your email..."/>
          </div>
        </div>
        <div className="row">
          <div className="col-m4">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col-m8">
            <input type="password"
                   required
                   id="password"
                   name="password"
                   placeholder="Enter your password..."/>
          </div>
        </div>
        <div className="row">
          <div className="col-m4">
            <label htmlFor="password_conf">Confirm password</label>
          </div>
          <div className="col-m8">
            <input type="password"
                   required
                   id="password_conf"
                   name="password_conf"
                   placeholder="Confirm your password..."/>
          </div>
        </div>
        <div className="row">
          <div className="col-m12 fr">
            <input type="submit" value="Sign up"/>
          </div>
        </div>
      </form>
    )
  }
}

export default SignUpForm;
