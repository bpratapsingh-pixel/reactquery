"use client";

import Link from "next/link";
import { useCustomQuery } from "../customHooks/useCustomQuery";
import { todoAPI } from "../lib/todoAPI";


export default function About() {
  const TODO_KEY = ["todos"];
  const { data, isPending, isError, error } = useCustomQuery({
      queryKey: TODO_KEY,
      queryFn: todoAPI.getTodos,
    });

  if (isPending)
    return (
      <p className="text-center text-gray-500 text-lg py-10 animate-pulse">
        Loading…
      </p>
    );

  if (isError)
    return (
      <p className="text-center text-red-600 text-lg py-10">
        Error: {error.message}
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          About Page
        </h1>

        <Link href="/">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl">
            Home
          </button>
        </Link>
      </div>

      {/* Todo List */}
      {data?.data && data?.data?.length > 0 ? (
        <ul className="space-y-4">
          {data?.data?.map((todo) => (
            <li
              key={todo.id}
              className="p-4 bg-white shadow rounded-xl flex items-center gap-3"
            >
              <span className="text-green-600 font-bold text-xl">✔</span>
              <p className="font-medium text-gray-800">{todo.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500 text-center">
          No cached todos found. Visit Home first.
        </p>
      )}
    </div>
  );
}
