"use client";

import { useState } from "react";
import { useCustomMutationQuery } from "@/hooks/customHooks/useCustomMutationQuery";
import { useCustomQuery } from "@/hooks/customHooks/useCustomQuery";
import { todoAPI } from "@/lib/todoAPI";
import { TODO_KEY } from "../constant/constant";

export default function useTodoList() {
    const { data, isPending, isError, error } = useCustomQuery({
        queryKey: TODO_KEY,
        queryFn: todoAPI.getTodos,
    });

    const deleteMutation = useCustomMutationQuery({
        mutationFn: todoAPI.deleteTodo,
        invalidateQueryKeys: [TODO_KEY],
    });

    const editMutation = useCustomMutationQuery({
        mutationFn: ({ id, title }) => todoAPI.editTodo(id, title),
        invalidateQueryKeys: [TODO_KEY],
    });

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.title);
    };

    const saveEdit = () => {
        if (!editText.trim()) return;

        editMutation.mutate(
            { id: editingId, title: editText },
            {
                onSuccess: () => {
                    setEditingId(null);
                    setEditText("");
                },
            }
        );
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditText("");
    };

    return {
        todos: data?.data ?? data ?? [],
        isPending,
        isError,
        error,
        deleteMutation,
        editMutation,
        editingId,
        editText,
        setEditText,
        startEdit,
        saveEdit,
        cancelEdit,
    };
}
