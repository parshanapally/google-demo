import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";

const SignedOutCallback = () => {
  return <Redirect to="/" />;
};

const history = createBrowserHistory();
const authStore = new AuthStore(history);

const HomeWithAuthStore = () => {
  return <Home authStore={authStore} />;
};
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signedout" component={SignedOutCallback} />
          <Route path="/" component={HomeWithAuthStore} />
        </Switch>
      </Router>
    );
  }
}

export default App;
