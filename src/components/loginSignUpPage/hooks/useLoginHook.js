"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function useLoginHook({ isModal = false } = {}) {
    const [isSignUp, setIsSignUp] = useState(true);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
            email: "",
        },
    });

    const { login } = useAuth();
    const router = useRouter();

    const onSubmit = (data) => {
        const userData = {
            name: data.username || "New User",
            email: data.email,
            avatar: "https://i.pravatar.cc/150?img=12",
        };

        login(userData);

        if (isModal) {
            router.back();
        } else {
            router.push("/");
        }
    };

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        reset();
    };

    return {
        isSignUp,
        control,
        handleSubmit,
        errors,
        onSubmit,
        toggleMode,
    };
}
