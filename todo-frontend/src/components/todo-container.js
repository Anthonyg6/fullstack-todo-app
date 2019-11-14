import React, { Component } from "react";
import axios from "axios";
import TodoItem from "./todo-item";
import TodoForm from "./todo-form";

export default class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };

    this.deleteTodos = this.deleteTodos.bind(this);
  }

  getTodoItems() {
    setInterval(() => {
      axios
        .get("http://localhost:3500/todo/todos")
        .then(response => {
          this.setState({
            data: response.data,
            isLoading: true
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, 400);
  }

  deleteTodos() {
    console.log("event", event);
  }

  // handleClick = _id => {
  //   console.log("clicked!!!!");
  // axios
  //   .delete(`http://localhost:3500/todo/todos/${_id}`)
  //   .then("response", response)
  //   .catch(error => {
  //     console.log(error);
  //   });

  componentDidMount() {
    this.getTodoItems();
    console.log(this.state.data);
  }

  componentWillUnmount() {
    clearInterval(this.getTodoItems);
  }

  todoItems() {
    if (this.state.data.length == 0) {
      return (
        <div>
          <p>You do not have any todos!</p>
        </div>
      );
    } else {
      return this.state.data.map(items => {
        return <div>{items.content}</div>;
      });
    }
  }

  // todoItems() {
  //   return this.state.data.map(items => {
  //     return <div>{items.content}</div>;
  //   });
  // }
  render() {
    return (
      <div className="todo-container">
        <div>{this.todoItems()}</div>
        <TodoForm />
      </div>
    );
  }
}
