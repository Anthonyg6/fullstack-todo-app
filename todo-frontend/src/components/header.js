import React, { Component } from "react";
import moment from "moment";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      time: moment().format("MMM Do YYYY, h:mm:ss a")
    };

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.setState({
      time: moment().format("MMM Do YYYY, h:mm:ss a")
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div className="header w3-container">
        <div className="header">
          <h1>Welcome, what is on the agenda today?</h1>
        </div>
        <div className="time">{this.state.time}</div>
      </div>
    );
  }
}
