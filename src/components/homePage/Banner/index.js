"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banner1, banner2 } from "@/assets/png";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const banners = [
    { src: banner1, title: "Casino Banner", showButton: false },
    { src: banner2, title: "Game Banner", showButton: true },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

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

  return (
    <section className="mt-6 px-4 sm:px-6 max-w-[90rem] mx-auto">

      {/* DESKTOP VIEW: Side-by-side (lg screens) */}
      <div className="hidden lg:flex gap-6">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative flex-1 rounded-xl overflow-hidden aspect-[21/9]"
          >
            <Image
              src={banner.src}
              alt={banner.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="50vw"
            />
            {banner.showButton && (
              <div className="absolute inset-0 flex items-end p-10 ">
                <button
                  className="
                    w-[clamp(9rem,12vw,11.25rem)] 
                    h-[clamp(2.75rem,4vw,3.25rem)]
                    rounded-[0.9375rem]
                    bg-gradient-to-br from-[#04145D] to-[#4D29A2]
                    text-white text-[clamp(0.9rem,1.2vw,1.125rem)] font-bold
                    border border-[#3C4360]
                    shadow-lg hover:brightness-125 transition
                  "
                >
                  Play Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE/TABLET VIEW: Animated Slider (< lg screens) */}
      <div className="lg:hidden relative group overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative w-full shrink-0 aspect-[16/9] sm:aspect-[21/9]"
            >
              <Image
                src={banner.src}
                alt={banner.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />

              {banner.showButton && (
                <div className="absolute inset-0 flex items-end p-6 sm:p-10">
                  <button
                    className="
                      w-[clamp(8.5rem,25vw,11.25rem)] 
                      h-[clamp(2.75rem,7vw,3.25rem)]
                      rounded-[0.9375rem]
                      bg-gradient-to-br from-[#04145D] to-[#4D29A2]
                      text-white text-[clamp(0.9rem,3vw,1.125rem)] font-bold
                      border border-[#3C4360]
                      shadow-lg hover:brightness-125 transition
                    "
                  >
                    Play Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows (visible on mobile/tablet hover) */}
        <button
          onClick={prevSlide}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            w-8 h-8 rounded-full bg-black/20 text-white
            flex items-center justify-center opacity-0 group-hover:opacity-100 transition
          "
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            w-8 h-8 rounded-full bg-black/20 text-white
            flex items-center justify-center opacity-0 group-hover:opacity-100 transition
          "
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${i === currentIndex ? "w-6 bg-[#EFDB02]" : "w-1.5 bg-white/50"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
