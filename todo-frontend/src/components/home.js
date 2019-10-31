import React from "react";
import TodoContainer from "./todo-container";
import moment from "moment";

export default function() {
  return (
    <div>
      <h1>Welcome, what is on the agenda today?</h1>
      <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      <TodoContainer />
    </div>
  );
}
