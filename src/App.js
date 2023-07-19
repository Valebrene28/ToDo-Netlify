import TodoForm from "./componentes/TodoForm/TodoForm"
import React, { useState } from "react";
import "./App.css";
import TodoItem from "./componentes/TodoItems/TodoItem";


function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important: false}
    let newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1 className="titulo">To Do App</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default App;





















// import { useState } from "react";
// import "./App.css";
// import List from "./componentes/list/List";
// import { TodoInput } from "./componentes/inputs/Input";
// import { Todo } from "./componentes/todo/todo";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const addTodo = (text) => {
//     let id = 1;
//     if (todos.length > 0);
//     {
//       id = todos[0].id + 1;
//     }
//     let todo = { id: id, text: text, completed: false };
//     let newTodos = [todo, ...todos];
//     console.log(newTodos);
//     setTodos(newTodos);
//   };
//   return (
//     <div>
//       {todos}
//       <List addTodo={addTodo} />
//       <div className="lista">
//         <Todo />
//       </div>
//       {TodoInput}
//     </div>
//   );
// }

// export default App;
