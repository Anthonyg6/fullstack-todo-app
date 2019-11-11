import React, { Component } from "react";
import axios from "axios";
import TodoItem from "./todo-item";
import TodoForm from "./todo-form";

export default class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      data: []
    };
    this.postTodoItems = this.postTodoItems.bind(this);
  }

  getTodoItems() {
    setInterval(() => {
      axios
        .get("http://localhost:3500/todo/todos")
        .then(response => {
          // console.log("response", response);
          this.setState({
            data: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, 400);
  }

  postTodoItems() {
    axios
      .post("http://localhost:3500/todo/todos")
      .then(response => {
        console.log("response", response);
        this.setState({
          data: response.data.content
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
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="todo-container">
        <div>{this.todoItems()}</div>
        <TodoForm postTodoItems={this.postTodoItems} />
      </div>
    );
  }
}
