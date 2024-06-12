//slecting elements in the DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

//ceate and delete on click
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    listItem.append(" ", removeButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  }
});

//create and delete on keydown
taskInput.addEventListener("keydown", (e) => {
  //checking if the event value is enter
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });

      listItem.append(" ", removeButton);
      taskList.appendChild(listItem);

      // Clear input field
      taskInput.value = "";
    }
  }
});
