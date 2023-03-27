import "./App.css";
import * as React from "react";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length != 0) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      alert("Please add a todo!");
    }
  };

  const handleDelete = (todo) => {
    setCompleted([...completed, todo]);
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div className="culo">
        <div className="todoBox">
          <h1>Todos</h1>
          <ul>
            {todos.map((todo) => (
              <li key={todo}>
                {todo}{" "}
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(todo)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="doneBox">
          <h1>Done</h1>
          <ul>
            {completed.map((todo) => (
              <li style={{ textDecoration: "line-through" }} key={todo}>
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
