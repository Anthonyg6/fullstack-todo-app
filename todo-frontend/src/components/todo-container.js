import React, { Component } from "react";
import axios from "axios";
import TodoItem from "./todo-item";

export default class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      data: []
    };
  }

  getTodoItems() {
    axios
      .get("http://localhost:3500/todo/todos")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getTodoItems();
  }

  todoItems() {
    return this.state.data.map(item => {
      return <TodoItem key={item._id} item={item} />;
    });
  }
  render() {
    //conditional checks if the page is loading up todos
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return <div>{this.todoItems()}</div>;
  }
}
