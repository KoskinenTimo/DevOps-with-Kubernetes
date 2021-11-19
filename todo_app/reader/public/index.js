const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const todos = [
  "First todo!",
  "Second todo!",
  "Third todo!"
]

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (todoInput.value.length <= 140) {
    console.log("success! not too long");
    console.log(`TODO input was: ${todoInput.value}`);
    todoInput.value = '';
  } else {
    console.log("fail! too long");
  }
});

const updateTodoList = () => {
  todos.forEach(todo => {
    let li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
  })
}

updateTodoList();