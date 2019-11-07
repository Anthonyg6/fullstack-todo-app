import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./auth";
import Home from "./home";

import CatchAll from "./catch-all";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route component={CatchAll} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
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
