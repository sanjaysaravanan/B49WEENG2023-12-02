let todoData = JSON.parse(localStorage.getItem("todos") || "[]");

todoData.forEach((val) => {
  addTask(val);
});

function addTask(val = undefined) {
  let taskList = document.getElementById("taskList");
  if (val) {
    let li = document.createElement("li");
    li.innerHTML = `${val} <button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
  } else {
    let taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);

    todoData.push(taskInput.value);

    localStorage.setItem("todos", JSON.stringify(todoData));

    taskInput.value = "";
  }
}

function deleteTask(button) {
  let li = button.parentNode;
  let taskList = li.parentNode;
  taskList.removeChild(li);
}
