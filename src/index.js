import React from "react";
import { render } from "react-dom";
import App from "./App";
import { withAuthenticator } from "aws-amplify-react";

const AppWithAuth = withAuthenticator(App, { includeGreetings: true });
const federated = {
  google_client_id:
    "847404625747-kj2ppqfv33rmg7cmgivumc743ugrnn1k.apps.googleusercontent.com"
};

render(<AppWithAuth federated={federated} />, document.getElementById("root"));
