"use client";

import React from "react";
import Link from "next/link";
import { SkeletonCard } from "@/ui/SkeletonCard/SkeletonCard";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

export default function InfiniteScrollPage() {
    const {
        data,
        error,
        loadMoreRef,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteScroll();

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
                            Infinite <span className="text-orange-500">Scroll</span>
                        </h1>
                        <p className="text-gray-500 mt-2">Just keep scrolling...</p>
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
                                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                                            {project.id}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
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

                {/* Hidden Observer Element */}
                <div
                    ref={loadMoreRef}
                    className="h-20 flex flex-col justify-center items-center mt-6 gap-2"
                >
                    {isFetchingNextPage && (
                        <>
                            <div className="w-full">
                                <SkeletonCard />
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 mt-2">
                                <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                                Loading more content...
                            </div>
                        </>
                    )}
                    {!hasNextPage && (
                        <p className="text-gray-400">You&apos;ve reached the end!</p>
                    )}
                </div>
            </div>
        </div>
    );
}
