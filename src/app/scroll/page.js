import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { projectsAPI } from "@/lib/projectsAPI";
import { PROJECTS_KEY } from "@/components/scroll/constant/constant";
import Scroll from '@/components/scroll';
import React from 'react';

export default async function ScrollPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: PROJECTS_KEY,
        queryFn: projectsAPI.fetchInfiniteProjects,
        initialPageParam: 1,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Scroll />
        </HydrationBoundary>
    );
}