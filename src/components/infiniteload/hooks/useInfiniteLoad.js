"use client";

import React from "react";
import { useCustomInfiniteQuery } from "../../../hooks/customHooks/useCustomInfiniteQuery";
import { PROJECTS_KEY } from "../constant/constant";
import { projectsAPI } from "@/lib/projectsAPI";

export default function useCustomHooks() {
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
        queryFn: projectsAPI.fetchInfiniteProjects,
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
