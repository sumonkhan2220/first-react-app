import React, { useRef } from "react";

const AddTodo = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
