import React, { Component } from "react";
import TodoItem from "./todo-item";

export default class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: [
        { content: "Clean out the kennel" },
        { content: "Take out the trash" },
        { content: "Wash the clothes" },
        { content: "Mow the lawn" }
      ]
    };
  }

  todoItems() {
    return this.state.data.map(item => {
      return <TodoItem todos={item.content} />;
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
