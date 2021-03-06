import React, { useEffect } from "react";
import axios from "axios";


const TodoList = ({ todos, setTodos}) => {
  const todoURL = process.env.REACT_APP_API_TODO_URL;

  useEffect(() => {
    console.log('gettings todos from todo api');
    axios(todoURL)
      .then(res => {
        const todosList = res.data;
        setTodos(todosList)
      })
      .catch(e => console.log(e))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  )
}

export default TodoList;