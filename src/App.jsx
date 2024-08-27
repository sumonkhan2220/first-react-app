import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";
import TodoItem from "./components/TodoItem";
const App = () => {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: " Go To College",
      dueDate: "4/10/2023",
    },

    {
      name: " Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItem, setTodoItem] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [...todoItem, { name: itemName, dueDate: itemDueDate }];
    setTodoItem(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItem todoItem={todoItem} />
    </center>
  );
};

export default App;
