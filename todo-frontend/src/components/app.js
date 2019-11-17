import React, { Component } from "react";
import TodoContainer from "./todo-container";
import moment from "moment";
import Header from "./header";

export default class App extends Component {
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
      <div className="app w3-container">
        <Header />
        <TodoContainer />
      </div>
    );
  }
}
