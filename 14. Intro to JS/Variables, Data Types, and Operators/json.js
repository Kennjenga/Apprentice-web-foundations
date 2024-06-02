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
const todojson = JSON.stringify(todos);
console.log(todojson);
