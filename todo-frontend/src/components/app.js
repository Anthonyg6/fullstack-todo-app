import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TodoContainer from "./todo-container";
import Login from "./login";
import Home from "./home";
import CatchAll from "./catch-all";

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      data: []
    };
  }

  getTodoItems() {
    axios
      .get("http://localhost:3500/todo/todos")
      .then(response => {
        console.log("response", response);
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

  todoItem() {
    return this.state.data.map(item => {
      console.log("item data", item);
      return todo;
    });
  }

  // deleteTodo = id => {
  //   axios
  //     .delete(`http://localhost:3500/todos/${id}`)
  //     .then(response => {
  //       this.setState({ todos: response.data });
  //     })
  //     .then(response => {
  //       let todos = this.state.todos.filter(todo => {
  //         return todo.id !== id;
  //       });
  //       this.setState({
  //         todos
  //       });
  //     });
  // };

  // addTodo = todo => {
  //   let todos = [...this.state.todos, todo];
  //   this.setState({ todos });
  // };

  // handleChange = e => {
  //   this.setState({
  //     todos: e.target.value
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.setState({
  //     todos: []
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <h1>Welcome, what is on the agenda today?</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route component={CatchAll} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
