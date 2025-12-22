"use client";
import Link from "next/link";

export default function Home() {
  const routes = [
    { label: "Home", path: "/Home", color: "bg-blue-600" },
    { label: "Promotions", path: "/promotionPage", color: "bg-indigo-600" },
    { label: "Todo App", path: "/todo", color: "bg-teal-600" },
    { label: "Infinite Load", path: "/infiniteload", color: "bg-green-600" },
    { label: "Pagination", path: "/pagination", color: "bg-purple-600" },
    { label: "Infinite Scroll", path: "/scroll", color: "bg-orange-600" },
    { label: "AI Feed", path: "/feed", color: "bg-pink-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 font-poppins">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0C1F58] mb-4">
          Welcome Back
        </h1>
        <p className="text-gray-500 mb-10 text-lg">
          Select a module to explore
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <Link key={index} href={route.path} className="group">
              <div
                className={`
                  h-32 flex items-center justify-center 
                  rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300 cursor-pointer
                  ${route.color} text-white
                `}
              >
                <span className="text-lg font-bold tracking-wide">
                  {route.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
