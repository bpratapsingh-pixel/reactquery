"use client";

import { useRouter } from "next/navigation";
import { photos } from "@/data/photos";

export default function usePhotoModal({ id }) {
    const router = useRouter();
    const photo = photos.find((p) => p.id == id);

    return {
        photo,
        onClose: () => router.back(),
    };
}
