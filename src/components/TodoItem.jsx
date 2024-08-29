import React from "react";
import TodoItem1 from "./TodoItem1";

const TodoItem = ({ todoItem, handleDeleteItem }) => {
  return (
    <div className="container">
      {todoItem.map((item, id) => (
        <TodoItem1 item={item} key={id} handleDeleteItem={handleDeleteItem} />
      ))}
    </div>
  );
};

export default TodoItem;
