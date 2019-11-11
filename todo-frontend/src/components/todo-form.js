import React, { Component } from "react";
import axios from "axios";

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3500/todo/todos",
      headers: { "content-type": "application/json" },
      data: {
        content: this.state.content,
        done: false
      }
    })
      .then(data => {
        this.setState({
          contents: [...this.state.contents, data.data],
          content: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ content: "" });
  };

  render() {
    return (
      <div className="todo-form-wrapper">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            type="text"
            name="content"
            placeholder="Add Some Todos!"
            value={this.state.content}
            onChange={this.handleChange}
          />

          <div className="todo-form-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
