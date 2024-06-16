// fetcing from json placeholder
async function fetchTodoData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todo data:", error);
    return null;
  }
}

//looping thro the data and displaying the data
async function displayTodoData() {
  const todoData = await fetchTodoData();
  if (todoData) {
    const appElement = document.querySelector("#app");
    todoData.map((todo) => {
      const todoElement = document.createElement("p");
      todoElement.innerText = `${todo.id}: ${todo.title}`;
      appElement.appendChild(todoElement);
    });
  }
}

displayTodoData();
