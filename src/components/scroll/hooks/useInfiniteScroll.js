"use client";

import { useRef, useEffect } from "react";
import { useCustomInfiniteQuery } from "../../../hooks/customHooks/useCustomInfiniteQuery";
import { PROJECTS_KEY } from "../constant/constant";
import { projectsAPI } from "@/lib/projectsAPI";

export default function useInfiniteScroll() {

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

    const loadMoreRef = useRef(null);

    useEffect(() => {
        if (!loadMoreRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1 }
        );

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [hasNextPage, fetchNextPage]);

    return {
        data,
        error,
        loadMoreRef,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    };
}
