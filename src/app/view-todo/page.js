import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { todoAPI } from "@/lib/todoAPI";
import { TODO_KEY } from "@/components/todo/constant/constant";
import TodoList from "@/components/todo/TodoList";
import Link from 'next/link';
import React from 'react';

export default async function ViewTodoPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: TODO_KEY,
        queryFn: todoAPI.getTodos,
    });

    return (
        <div className="min-h-screen p-8 bg-gray-50 font-poppins">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/todo" className="text-blue-600 hover:underline font-medium flex items-center gap-1">
                        ← Back to Add Task
                    </Link>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 p-8 border border-gray-100">
                    <h1 className="text-3xl font-extrabold mb-6 text-[#0C1F58]">My Tasks</h1>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <TodoList />
                    </HydrationBoundary>
                </div>
            </div>
        </div>
    );
}