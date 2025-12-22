import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { projectsAPI } from "@/lib/projectsAPI";
import { PROJECTS_KEY } from "@/components/infiniteload/constant/constant";
import Pagination from '@/components/pagination';
import React from 'react';

export default async function PaginationPagePrerender() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: PROJECTS_KEY,
        queryFn: () => projectsAPI.fetchProjects(1),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Pagination />
        </HydrationBoundary>
    );
}