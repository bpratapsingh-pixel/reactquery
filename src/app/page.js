"use client";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Home Page
      </h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <Link href="/Home">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
           Home
          </button>
        </Link>
       <Link href="/loginSignUpPage">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
           Login/Signup
          </button>
        </Link>

        <Link href="/todo">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
           Todo
          </button>
        </Link>
        <Link href="/infiniteload">
          <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Infinite Load
          </button>
        </Link>

        <Link href="/pagination">
          <button className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Pagination
          </button>
        </Link>
        <Link href="/scroll">
          <button className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-yellow-700 transition">
            scroll
          </button>
        </Link>
        <Link href="/feed">
          <button className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-yellow-700 transition">
            feed
          </button>
        </Link>
      </div>
    </div>
  );
}
