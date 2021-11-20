import React, { useState } from "react";
import axios from "axios";

const TodoInput = ({ todos, setTodos }) => {
  const [ todo, setTodo ] = useState('');
  const todoURI = process.env.REACT_APP_API_TODO_URI;
  console.log(todo);

  const submitTodo = (e) => {
    e.preventDefault();
    axios.post(todoURI, { todo })
      .then(res => {
        const newTodosList = todos.concat(todo)
        setTodos(newTodosList);
        setTodo('');
      })
      .catch(e => console.log(e))
  }

  return (
    <form onSubmit={submitTodo}>
      <input 
        onChange={(e) => setTodo(e.target.value)} 
        value={todo}
        maxLength="140"
      />
      <button type="submit">Create TODO</button>
    </form>
  );
}

export default TodoInput;