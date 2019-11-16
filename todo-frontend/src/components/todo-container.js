import React, { Component } from "react";
import axios from "axios";
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
            data: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, 400);
  }

  deleteTodos(_id) {
    event.preventDefault();
    axios
      .delete(`http://localhost:3500/todo/todos/${_id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getTodoItems();
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
        return (
          <div className="todos" key={items._id}>
            <span>{items.content}</span>
            <button
              className="deleteTodo-btn"
              onClick={() => this.deleteTodos(items._id)}
            />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="todo-container">
        <div>{this.todoItems()}</div>
        <TodoForm />
      </div>
    );
  }
}
