"use client";

import { useState } from "react";
import { useCustomMutationQuery } from "@/customHooks/useCustomMutationQuery";
import { todoAPI } from "../lib/todoAPI";

export default function TodoForm() {
  const TODO_KEY = ["todos"];
  const [todo, setTodo] = useState("");

  const addTodo = useCustomMutationQuery({
    mutationFn: todoAPI.addTodo,
    invalidateQueryKeys: [TODO_KEY],
  });

  const handleAdd = () => {
    const trimmed = todo.trim();
    if (!trimmed) return;

    addTodo.mutate(trimmed);
    setTodo("");
  };

  return (
    <div className="mt-4 flex items-center">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo..."
        className="flex-1 p-2 border rounded-lg"
      />
      <button
        onClick={handleAdd}
        className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Add
      </button>
    </div>
  );
}
