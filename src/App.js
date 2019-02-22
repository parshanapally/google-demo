import React, { Component } from "react";

import awsconfig from "./aws-exports";
import Auth from "@aws-amplify/auth";
import { Analytics, Storage } from "aws-amplify";

Auth.configure(awsconfig);
Analytics.configure(awsconfig);
Storage.configure(awsconfig);

class App extends Component {
  state = {
    isSaved: false
  };
  componentDidMount() {
    let hours = 24;

    let currentTime = new Date().getTime();
    let employeeKey = localStorage.getItem("key");

    if (employeeKey == null) {
      localStorage.setItem("key", currentTime);
      console.log(currentTime);
      this.setState({ isSaved: true });
    } else {
      if (currentTime - employeeKey > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem("key", currentTime);
        this.setState({ isSaved: true });
      }
    }
  }
  render() {
    return (
      <div>
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
