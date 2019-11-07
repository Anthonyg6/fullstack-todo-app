import React, { Component } from "react";

import Login from "./login";

export default class Auth extends Component {
  render() {
    return (
      <div className="login-page-wrapper">
        <h1>Login Component goes here!</h1>
        <Login />
      </div>
    );
  }
}
