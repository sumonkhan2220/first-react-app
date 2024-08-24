import React from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
const App = () => {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <div class="container text-center">
          <div class="row">
            <div class="col-6">Buy Milk</div>
            <div class="col-4">4/10/2023</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col-6">Go To College</div>
            <div class="col-4">4/10/2023</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
