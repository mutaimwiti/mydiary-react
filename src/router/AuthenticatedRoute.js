import React, {Component} from "react";
import {
  Redirect,
  Route,
} from 'react-router-dom';
import {getAuth} from "../../utils/auth";
import ROUTES from "./routes";

export default class AuthenticatedRoute extends Component {
  constructor(props) {
    super(props);
    this.token = getAuth();
    this.isAuthenticated = this.token !== null;
  }

  renderUnprotected(component) {
    const {path} = this.props;
    return (path === ROUTES.auth.login || path === ROUTES.auth.signUp)
      ? component : <Redirect to={{pathname: ROUTES.auth.login}}/>;
  }

  renderProtected(component) {
    const {path, location} = this.props;
    return (path === ROUTES.auth.login || path === ROUTES.auth.signUp)
      ? <Redirect to={{pathname: ROUTES.entries.index, state: {from: location}}}/> : component;
  }

  render() {
    const {component: ComponentToRender, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={
          props => (
            this.isAuthenticated ?
              this.renderProtected(<ComponentToRender {...props} />) :
              this.renderUnprotected(<ComponentToRender {...props} />)
          )
        }
      />
    );
  }
}
