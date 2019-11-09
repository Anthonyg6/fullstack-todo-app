import React, { Component } from "react";
import Axios from "axios";

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      content: []
    };
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTodoItems();
  };
  render() {
    return (
      <div className="todo-form-wrapper">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label className="form-label"> Lets Add some Todo's!</label>
          <input
            className="todo-input"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
