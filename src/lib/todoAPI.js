import localDB from "./localDB";

export const todoAPI = {
  getTodos: async () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const fail = Math.random() < 0.2; // simulate random error
        if (fail) reject(new Error("Failed to fetch todos"));
        else resolve({ data: localDB.getTodos() });
      }, 500);
    }),

  addTodo: async (title) =>
    new Promise((resolve) => {
      setTimeout(() => {
        localDB.addTodo(title);
        resolve({ success: true, title });
      }, 400);
    }),

  deleteTodo: async (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        localDB.deleteTodo(id);
        resolve({ success: true });
      }, 400);
    }),

  editTodo: async (id, title) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const updated = localDB.editTodo(id, title);
        resolve({ success: true, updated });
      }, 400);
    }),
};
