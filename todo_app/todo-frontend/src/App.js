import React, { useState } from 'react';
import TimeStamp from './TimeStamp';
import Visits from './Visits';
import ImageLoader from './ImageLoader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [ todos, setTodos ] = useState([]);
  
  return (
    <div>
      <TimeStamp />
      <Visits />
      <ImageLoader />
      <TodoInput todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
