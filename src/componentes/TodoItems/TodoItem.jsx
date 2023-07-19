import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { RiCheckboxCircleLine } from "react-icons/ri";
const TodoItems = (props) => {
  const { todo, removeTodo, completeTodo } = props;
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      {props.todo.text}
      <div className="iconsContainer">
        <FcFullTrash
          className="icon"
          style={{ marginRight: 10 }}
          onClick={() => removeTodo(todo.id)}
        />
        <RiCheckboxCircleLine onClick={() => completeTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItems;