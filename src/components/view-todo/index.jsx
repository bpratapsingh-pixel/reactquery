
import TodoList from "../todo/TodoList.jsx";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-poppins flex justify-center">
      <div className="w-full max-w-2xl mt-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0C1F58]">
              My Tasks
            </h1>
            <p className="text-gray-400 mt-1">Review and manage your daily goals</p>
          </div>
          <Link href="/todo">
            <button className="px-5 py-2.5 bg-[#0C1F58] text-white rounded-xl shadow-lg shadow-blue-900/20 hover:bg-[#1a2f6d] transition font-semibold flex items-center gap-2">
              + New Task
            </button>
          </Link>
        </div>

        {/* Todo List Card */}
        <div className="bg-white shadow-xl shadow-gray-100 rounded-3xl border border-gray-100 overflow-hidden min-h-[400px]">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
