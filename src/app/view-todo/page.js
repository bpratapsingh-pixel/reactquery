"use client";

import TodoList from "@/components/TodoList";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4">
      {/* Card */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-200 p-6">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            About Todos
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage and review your tasks effortlessly
          </p>
        </div>

        {/* Todo List */}
        <TodoList />
      </div>
    </div>
  );
}
