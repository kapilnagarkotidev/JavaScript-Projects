let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTask");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
  let task = taskInput.value.trim();
  if (task !== "") {
    let li = document.createElement("li");
    li.textContent = task;

    // Add a button to remove the task
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
      li.remove();
    });

    // Add a button to mark the task as completed
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    li.appendChild(removeBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Add task on Enter key press
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
