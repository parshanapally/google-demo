import React, { Component } from "react";
import Button from "react-bootstrap";

class Home extends Component {
  state = {
    authenticated: this.props.authStore.isAuthenticated()
  };

  handleAuthChange = authenticated => {
    this.setState({ authenticated: authenticated });
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
