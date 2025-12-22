"use client";

import React from "react";
import { useCustomInfiniteQuery } from "../../../hooks/customHooks/useCustomInfiniteQuery";
import { PROJECTS_KEY, API_URL } from "../constant/constant";

export default function useCustomHooks() {
    const fetchProjects = async ({ pageParam = 1 }) => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const res = await fetch(`${API_URL}?_limit=10&_page=${pageParam}`);

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

    return {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    };
}
