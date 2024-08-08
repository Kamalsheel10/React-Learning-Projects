import React from "react";
import AddTodo from "./components/ AddTodo";
import Todos from "./components/ Todos";

const App = () => {
  return (
    <div>
      <h1>Todo</h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
