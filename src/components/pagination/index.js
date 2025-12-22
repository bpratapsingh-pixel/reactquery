"use client";

import React from "react";
import Link from "next/link";
import { useCustomPageQuery } from "../../hooks/customHooks/useCustomPageQuery";

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

export default function PaginationPage() {
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Smart <span className="text-purple-600">Pagination</span>
            </h1>
            <p className="text-gray-500 mt-2">Navigate through content efficiently</p>
          </div>
          <Link href="/">
            <button className="px-6 py-2.5 bg-white text-gray-700 font-medium rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all">
              ← Back Home
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {isPending ? (
            <div className="flex justify-center items-center h-full py-20">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : isError ? (
            <div className="text-center text-red-500 py-10 bg-red-50 rounded-xl">
              <p>Error: {error.message}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-x-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">
                      {project.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{project.title}</h3>
                      <p className="text-gray-500 text-sm">
                        {project.body || "No description available for this item."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Pagination Bar */}
        <div className="sticky bottom-8 mt-8">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full p-2 flex items-center justify-between max-w-sm mx-auto">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <span className="text-xl">←</span>
            </button>

            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 font-medium">PAGE</span>
              <span className="text-lg font-bold text-gray-800">{page}</span>
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  if (hasMore) setPage((p) => p + 1);
                }}
                disabled={!hasMore}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg shadow-purple-200 hover:bg-purple-700 disabled:opacity-50 disabled:shadow-none transition-all"
              >
                <span className="text-xl">→</span>
              </button>
              {isFetching && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
