let todos = [];
let i = 0;

const localDB = {
  getTodos() {
    return todos;
  },
  addTodo(title) {
    todos.push({ id: i, title, complete: false });
    i++;
    return title;
  },
  deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    return todos;
  },
  editTodo(id, title) {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    return todos.find((t) => t.id === id);
  },
};

export default localDB;
