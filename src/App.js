import React, { Component } from "react";

import awsconfig from "./aws-exports";
import Auth from "@aws-amplify/auth";

Auth.configure(awsconfig);

class App extends Component {
  render() {
    return <div>Hello</div>;
  }
}

export default App;
