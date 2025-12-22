"use client";

import React from "react";
import Link from "next/link";
import { SkeletonCard } from "@/ui/SkeletonCard/SkeletonCard";
import useInfiniteLoad from "./hooks/useInfiniteLoad";
export default function InfiniteLoadView() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteLoad()
    if (status === "pending")
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="flex justify-between items-center mb-10">
                        <div className="h-10 bg-gray-200 rounded w-64 animate-pulse"></div>
                        <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                    {[...Array(5)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        );

    if (status === "error")
        return (
            <div className="text-center text-red-500 py-10 bg-red-50 rounded-xl mx-4">
                <p className="font-bold">Error loading data</p>
                <p className="text-sm opacity-80">{error?.message}</p>
            </div>
        );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                            Infinite <span className="text-blue-600">Loading</span>
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Manually load more content as you go
                        </p>
                    </div>
                    <Link href="/">
                        <button className="px-6 py-2.5 bg-white text-gray-700 font-medium rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all">
                            ← Back Home
                        </button>
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="space-y-4">
                    {data?.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {group.data.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                            {project.id}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {project.body ||
                                                    "No description available for this item. Just a placeholder text to show the layout."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-10 text-center space-y-4">
                    {isFetchingNextPage && (
                        <div className="space-y-4 opacity-50">
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    )}

                    <button
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200
                        disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
                    >
                        {isFetchingNextPage ? (
                            "Loading more..."
                        ) : hasNextPage ? (
                            "Load More Posts"
                        ) : (
                            "All Caught Up! 🎉"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
