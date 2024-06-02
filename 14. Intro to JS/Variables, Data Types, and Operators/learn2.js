const todos = [
  {
    id: 1,
    title: "Complete web development project",
    due_date: "2024-06-15",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Learn React.js",
    due_date: "2024-06-10",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Design UI for portfolio website",
    due_date: "2024-06-05",
    priority: "high",
    completed: true,
  },
  {
    id: 4,
    title: "Practice algorithms and data structures",
    due_date: "2024-06-20",
    priority: "low",
    completed: false,
  },
];

// for (i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

/*for (let todo of todos) {
  console.log(todo);
}*/

/*const tododue = todos.forEach((todo) => {
  console.log(todo.due_date);
});
console.log(tododue);*/

/*const tododue = todos.map((todo) => {
  return [todo.id, todo.due_date];
});
for (let t of tododue) {
  console.log(t);
}*/

//console.log(todos);
const completed = todos
  .filter((todo) => {
    return todo.completed === true;
  })
  .map((todo) => {
    return todo.title;
  });
console.log(completed);
