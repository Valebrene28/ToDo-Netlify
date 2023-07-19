import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
      value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Agregar tarea"
      />
      <button type="submit" className="todo-button">
        AGREGAR 
      </button>
      
    </form>
  );
};

export default TodoForm;