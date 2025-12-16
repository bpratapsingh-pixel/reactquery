"use client";

import React from "react";
import Link from "next/link";
import { useCustomInfiniteQuery } from "../../customHooks/useCustomInfiniteQuery";

export default function Projects() {
const PROJECTS_KEY = ["projects"];
  const fetchProjects = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
  );

  if (!res.ok) throw new Error("API Error");

  const data = await res.json();

  return {
    data,
    nextCursor: data.length < 10 ? undefined : pageParam + 1,
  };
};


  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useCustomInfiniteQuery({
    queryKey: PROJECTS_KEY,
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  

  if (status === "pending")
    return (
      <p className="text-center text-gray-500 text-lg py-10 animate-pulse">
        Loading...
      </p>
    );

  if (status === "error")
    return (
      <p className="text-center text-red-600 text-lg py-10">
        Error: {error.message}
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Infinite Loading
        </h1>

        <Link href="/">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-200">
            Home
          </button>
        </Link>
      </div>

      {/* Cards */}
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.data.map((project) => (
            <div
              key={project.id}
              className="p-4 mb-4 rounded-xl shadow bg-white/80 backdrop-blur border border-gray-200
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <p className="font-semibold text-gray-800 text-lg">
                {project.id}. {project.title}
              </p>
            </div>
          ))}
        </React.Fragment>
      ))}

      {/* Load More Button */}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="w-full py-3 mt-4 rounded-xl font-medium text-white
                   bg-gradient-to-r from-blue-600 to-purple-600
                   hover:opacity-90 hover:shadow-lg transition-all duration-200
                   disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "No more posts"}
      </button>

      {/* Fetching Indicator */}
      {isFetching && !isFetchingNextPage && (
        <p className="text-center text-gray-500 mt-3 animate-pulse">
          Fetching...
        </p>
      )}
    </div>
  );
}
