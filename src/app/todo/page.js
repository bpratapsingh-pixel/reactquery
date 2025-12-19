import React from "react";
import TodoForm from "@/components/TodoForm";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      {/* Card */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-gray-200">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Todo App
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Organize your tasks efficiently
          </p>
        </div>

        {/* Todo Components */}
        <TodoForm />
        <div className="mt-5">
        </div>
         <Link href="/view-todo">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            view-todo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
