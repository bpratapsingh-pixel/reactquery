"use client";

import React from "react";
import Link from "next/link";
import { useCustomPageQuery } from "../../customHooks/useCustomPageQuery";

const PROJECTS_KEY = ["projects"];

const fetchProjects = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );

  if (!res.ok) {
    throw new Error("API Error");
  }

  const data = await res.json();

  return {
    projects: data,
    hasMore: data.length === 10,
  };
};

export default function Todos() {
  const [page, setPage] = React.useState(1);

  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
  } = useCustomPageQuery({
    page,
    queryKey: PROJECTS_KEY,
    queryFn: fetchProjects,
    staleTime: 1000 * 60,
    retry: 2,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const projects = data?.projects ?? [];
  const hasMore = data?.hasMore ?? false;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Pagination Example
        </h1>

        <Link href="/">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
            Home
          </button>
        </Link>
      </div>

      {/* Content */}
      {isPending ? (
        <p className="text-center animate-pulse">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-600">Error: {error.message}</p>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 border rounded-xl shadow-sm bg-white"
            >
              <p className="font-medium">
                {project.id}. {project.title}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Page Info */}
      <p className="mt-5 text-center font-semibold">
        Page: <span className="text-blue-600">{page}</span>
      </p>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded-xl disabled:opacity-50"
        >
          ⬅ Previous
        </button>

        <button
          onClick={() => {
            if (hasMore) setPage((p) => p + 1);
          }}
          disabled={!hasMore}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>

      {/* Fetching indicator */}
      {isFetching && (
        <p className="mt-3 text-center text-gray-500 animate-pulse">
          Fetching new page...
        </p>
      )}
    </div>
  );
}
