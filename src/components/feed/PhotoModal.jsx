"use client";

import Image from "next/image";
import React from "react";
import usePhotoModal from "./hooks/usePhotoModal";

export default function PhotoModalView({ id }) {
    const { photo, onClose } = usePhotoModal({ id });

    if (!photo) return null;

    return (
        <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose} // Click outside to close
        >
            <div
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300 relative"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
            >
                <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-gray-100">
                    <Image
                        src={photo.img}
                        alt={photo.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                    >
                        ✕
                    </button>

                    <h2 className="text-3xl font-extrabold text-[#0C1F58] mb-4">
                        {photo.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {photo.desc}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex gap-4">
                        <button className="flex-1 py-3 bg-[#0C1F58] text-white rounded-xl font-semibold hover:opacity-90 transition">
                            Share
                        </button>
                        <button className="flex-1 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
