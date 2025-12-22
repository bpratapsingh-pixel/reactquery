"use client";

import { useState, useEffect, useCallback } from "react";

export function useBannerSlider(bannersCount) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % bannersCount);
    }, [bannersCount]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + bannersCount) % bannersCount);
    }, [bannersCount]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        // Auto-slide only on mobile
        let timer;
        if (window.innerWidth < 1024) {
            timer = setInterval(nextSlide, 5000);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            if (timer) clearInterval(timer);
        };
    }, [nextSlide]);

    return {
        currentIndex,
        setCurrentIndex,
        isMobile,
        nextSlide,
        prevSlide,
    };
}
