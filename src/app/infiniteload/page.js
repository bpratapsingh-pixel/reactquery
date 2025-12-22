import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { projectsAPI } from "@/lib/projectsAPI";
import { PROJECTS_KEY } from "@/components/infiniteload/constant/constant";
import InfiniteLoad from '@/components/infiniteload';
import React from 'react';

export default async function InfiniteLoadPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: PROJECTS_KEY,
        queryFn: projectsAPI.fetchInfiniteProjects,
        initialPageParam: 1,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <InfiniteLoad />
        </HydrationBoundary>
    );
}