const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get("/", (req,res) => {
  res.send(todos);
});

app.post("/", (req,res) => {
  const { todo } = req.body;
  console.log(todo);
  if (todo && todo.length) {
    todos = todos.concat(todo);    
  }
  res.send(todo);
});

module.exports = app;