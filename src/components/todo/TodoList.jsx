"use client";

import React from "react";
import useTodoList from "./hooks/useTodoList";

export default function TodoList() {
    const {
        todos,
        isPending,
        isError,
        error,
        deleteMutation,
        editMutation,
        editingId,
        editText,
        setEditText,
        startEdit,
        saveEdit,
        cancelEdit,
    } = useTodoList();

    if (isPending) return <div className="text-gray-500 py-4">Loading todos...</div>;
    if (isError) return <div className="text-red-500 py-4">Error: {error?.message}</div>;

    return (
        <ul className="mt-4 space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="p-3 border border-gray-100 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex justify-between items-center group"
                >
                    {editingId === todo.id ? (
                        <input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg w-full mr-3 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                            autoFocus
                        />
                    ) : (
                        <span className="text-gray-700 font-medium">{todo.title}</span>
                    )}

                    <div className="flex gap-2">
                        {editingId === todo.id ? (
                            <>
                                <button
                                    onClick={saveEdit}
                                    disabled={editMutation.isPending}
                                    className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
                                >
                                    {editMutation.isPending ? "..." : "Save"}
                                </button>
                                <button
                                    onClick={cancelEdit}
                                    className="px-3 py-1.5 rounded-lg bg-gray-400 text-white text-sm font-medium hover:bg-gray-500 transition-colors"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => startEdit(todo)}
                                    className="px-3 py-1.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteMutation.mutate(todo.id)}
                                    disabled={deleteMutation.isPending}
                                    className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50 opacity-0 group-hover:opacity-100"
                                >
                                    {deleteMutation.isPending ? "..." : "Delete"}
                                </button>
                            </>
                        )}
                    </div>
                </li>
            ))}
            {todos.length === 0 && (
                <p className="text-center text-gray-400 py-6">No todos yet. Add one above!</p>
            )}
        </ul>
    );
}
