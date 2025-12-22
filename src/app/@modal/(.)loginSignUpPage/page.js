"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@/components/loginSignUpPage"), {
    ssr: false,
});

export default function LoginModal() {
    const router = useRouter();

    return (
        <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => router.back()}
        >
            <div
                className="relative w-full max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <LoginPage isModal={true} />

                <button
                    onClick={() => router.back()}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
