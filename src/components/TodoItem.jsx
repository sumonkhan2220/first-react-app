import React from "react";
import TodoItem1 from "./TodoItem1";

const TodoItem = ({ todoItem }) => {
  return (
    <div className="container">
      {todoItem.map((item, id) => (
        <TodoItem1 item={item} key={id} />
      ))}
    </div>
  );
};

export default TodoItem;
