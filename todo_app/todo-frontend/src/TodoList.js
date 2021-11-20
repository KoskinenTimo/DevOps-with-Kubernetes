import React, { useEffect } from "react";
import axios from "axios";


const TodoList = ({ todos, setTodos}) => {
  const todoURI = process.env.REACT_APP_API_TODO_URI;

  useEffect(() => {
    console.log('gettings todos from todo api');
    axios(todoURI)
      .then(res => {
        const todosList = res.data;
        setTodos(todosList)
      })
      .catch(e => console.log(e))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <ul>
      {todos.map((todo,index) => <li key={index}>{todo}</li>)}
    </ul>
  )
}

export default TodoList;