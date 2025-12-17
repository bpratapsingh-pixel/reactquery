"use client";

import { useCustomMutationQuery } from "../customHooks/useCustomMutationQuery";
import { useCustomQuery } from "../customHooks/useCustomQuery";
import { todoAPI } from "../lib/todoAPI";
import { useState } from "react";

const TODO_KEY = ["todos"]; 

export default function TodoList() {
  const { data, isPending, isError, error } = useCustomQuery({
    queryKey: TODO_KEY,
    queryFn: todoAPI.getTodos,
  });

  const deleteMutation = useCustomMutationQuery({
    mutationFn: todoAPI.deleteTodo,
    invalidateQueryKeys: [TODO_KEY],
  });

  const editMutation = useCustomMutationQuery({
    mutationFn: ({ id, title }) => todoAPI.editTodo(id, title),
    invalidateQueryKeys: [TODO_KEY],
  });

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  if (isPending) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const todos = data?.data ?? data ?? [];

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;

    editMutation.mutate(
      { id: editingId, title: editText },
      {
        onSuccess: () => {
          setEditingId(null);
          setEditText("");
        },
      }
    );
  };

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="p-3 border rounded flex justify-between items-center"
        >
          {editingId === todo.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border p-1 rounded w-full mr-2"
            />
          ) : (
            <span>{todo.title}</span>
          )}

          <div className="flex gap-2">
            {editingId === todo.id ? (
              <>
                <button
                  onClick={saveEdit}
                  disabled={editMutation.isPending}
                  className="px-3 py-1 rounded bg-green-600 text-white"
                >
                  {editMutation.isPending ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setEditText("");
                  }}
                  className="px-3 py-1 rounded bg-gray-400 text-white"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => startEdit(todo)}
                  className="px-3 py-1 rounded bg-blue-600 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMutation.mutate(todo.id)}
                  disabled={deleteMutation.isPending}
                  className="px-3 py-1 rounded bg-red-600 text-white"
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
