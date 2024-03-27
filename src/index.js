document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

  
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);

    sortedTasksArray = taskList.sort(function(a, b) {
      return b.dataset.priority - a.dataset.priority;})

 var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
   newTask.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
            taskList.removeChild(newTask);
})
})
})