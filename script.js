//your code here
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", function() {
    let todo = newTodoInput.value;
    if(!todo.trim()){
    alert("Please enter a valid todo item");
    return;
    }
    let newTodo = document.createElement("li");
    newTodo.innerHTML = todo;
    todoList.appendChild(newTodo);
    newTodoInput.value = "";
});

