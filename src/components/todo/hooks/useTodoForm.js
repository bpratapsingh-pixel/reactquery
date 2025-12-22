"use client";

import { useState } from "react";
import { useCustomMutationQuery } from "@/hooks/customHooks/useCustomMutationQuery";
import { todoAPI } from "@/lib/todoAPI";
import { TODO_KEY } from "../constant/constant";

export default function useTodoForm() {
    const [todo, setTodo] = useState("");

    const addTodo = useCustomMutationQuery({
        mutationFn: todoAPI.addTodo,
        invalidateQueryKeys: [TODO_KEY],
    });

    const handleAdd = () => {
        const trimmed = todo.trim();
        if (!trimmed) return;

        addTodo.mutate(trimmed);
        setTodo("");
    };

    return {
        todo,
        setTodo,
        handleAdd,
    };
}
