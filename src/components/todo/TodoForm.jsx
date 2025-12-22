"use client";

import React from "react";
import useTodoForm from "./hooks/useTodoForm";

export default function TodoForm() {
    const { todo, setTodo, handleAdd } = useTodoForm();

    return (
        <div className="mt-4 flex items-center">
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter todo..."
                className="flex-1 p-2 border rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <button
                onClick={handleAdd}
                className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Add
            </button>
        </div>
    );
}
