import React, { Component } from "react";
import TodoContainer from "./todo-container";
import moment from "moment";

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
      <div className="App">
        <h1>Welcome, what is on the agenda today?</h1>
        {this.state.time}
        <TodoContainer />
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
