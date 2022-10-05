const DOM = {
  newTodoInput: document.getElementById('myInput'),
  todosContainer: document.getElementById('myUL'),
  addTodo: document.getElementById('addBtn'),
};

const newCloseBtn = () => {
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&#x00d7; ';
  closeBtn.classList.add('close');
  closeBtn.onclick = () => {
    closeBtn.parentElement.remove();
  };
  return closeBtn;
};
const handleCheckTodo = (todo) => {
  todo.onclick = () => {
    if (todo.classList.contains('checked')) {
      todo.classList.remove('checked');
    } else {
      todo.classList.add('checked');
    }
  }
};
const newTodo = () => {
  const todo = document.createElement('li');
  const todoText = document.createTextNode(DOM.newTodoInput.value);
  const closeBtn = newCloseBtn();

  todo.appendChild(todoText);
  todo.appendChild(closeBtn);
  handleCheckTodo(todo);

  DOM.todosContainer.appendChild(todo);
  DOM.newTodoInput.value = '';
};

// validation
DOM.addTodo.onclick = () => {
  if (DOM.newTodoInput.value === '') {
    alert('Please, fill the input!');
    return;
  }
  newTodo();
};

// add check handlers, closeBtn to existing todos
Array.from(DOM.todosContainer.children).forEach(todo => {
  handleCheckTodo(todo);
  todo.appendChild(newCloseBtn());
});

  

}
