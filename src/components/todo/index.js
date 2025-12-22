import React from "react";
import TodoForm from "./TodoForm";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 font-poppins">
      <div className="w-full max-w-lg">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center">
          <Link href="/">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition flex items-center gap-1">
              ← Home
            </button>
          </Link>
          <Link href="/view-todo">
            <button className="px-4 py-2 bg-white text-teal-600 border border-teal-100 rounded-lg shadow-sm hover:shadow-md transition text-sm font-semibold">
              View My Tasks →
            </button>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white shadow-xl shadow-gray-100 rounded-3xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              📝
            </div>
            <h1 className="text-3xl font-extrabold text-[#0C1F58]">
              New Task
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              What needs to be done today?
            </p>
          </div>

          <TodoForm />

        </div>
      </div>
    </div>
  );
};

export default Page;
