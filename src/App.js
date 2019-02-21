import React, { Component } from "react";

import awsconfig from "./aws-exports";
import Auth from "@aws-amplify/auth";
import { Analytics, Storage } from "aws-amplify";

Auth.configure(awsconfig);
Analytics.configure(awsconfig);
Storage.configure(awsconfig);

class App extends Component {
  state = {
    employee: [],
    isSaved: false
  };
  componentDidMount() {
    let hours = 24; // Reset when storage is more than 24hours
    let now = new Date().getTime();
    let employeeKey = localStorage.getItem("key");
    if (employeeKey == null) {
      localStorage.setItem("key", now);
      this.setState({ isSaved: false });
    } else {
      if (now - employeeKey > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem("key", now);
        this.setState({ isSaved: true });
      }
    }
  }
  render() {
    return <div>Hello</div>;
  }
}

export default App;
