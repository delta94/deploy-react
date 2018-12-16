import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./Store";
import jwt_decoded from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";
import { clearCurrentProfile } from "./actions/profileActions";

if (localStorage.getItem("jwtToken")) {
  setAuthToken(localStorage.getItem("jwtToken"));
  const decoded = jwt_decoded(localStorage.getItem("jwtToken"));
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(clearCurrentProfile());
  // check for expired token
  const currentTiem = Date.now() / 1000;
  if (decoded.exp < currentTiem) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
