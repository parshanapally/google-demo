import React, { Component } from "react";
import Button from "react-bootstrap";
import {
  AuthenticatedUserButtons,
  GuestButtons
} from "../components/UserButtons/index";
import NavHeader from "./NavHeader";

class Home extends Component {
  state = {
    authenticated: this.props.authStore.isAuthenticated()
  };

  handleAuthChange = authenticated => {
    this.setState({ authenticated: authenticated });
  };
  handleAuthentication = () => {
    if (this.state.authenticated) {
      return (
        <AuthenticatedUserButtons signOut={this.props.authStore.signOut} />
      );
    } else {
      return <GuestButtons signIn={this.props.authStore.signIn} />;
    }
  };

  componentWillMount() {
    this.props.authStore.subscribe(this.handleAuthChange);
  }
  componentWillUnmount() {
    this.props.authStore.unsubscribe();
  }

  invokeApi = async call => {
    try {
      const response = await call(this.props.authStore);
      toaster.show({ message: response.message, intent: Intent.SUCCESS });
    } catch (err) {
      toaster.show({ message: err.message, intent: Intent.DANGER });
    }
  };

  render() {
    return (
      <div>
        <NavHeader
          value={this.state.authenticated}
          handleAuthentication={this.handleAuthentication}
        />
        <div className="center">
          <Button
            intent="success"
            text="No Auth"
            onClick={() => this.invokeApi(noAuthCall)}
          />
          <Button
            intent={this.state.authenticated ? "success" : "danger"}
            text="Req. Auth"
            onClick={() => this.invokeApi(authenticatedCall)}
          />
        </div>
      </div>
    );
  }
}

export default Home;
