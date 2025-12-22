"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function CustomCarousel({
  title,
  icon,
  children,
  showSeeAll = true,
  onSeeAll,
}) {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: dir === "left" ? -18 * 16 : 18 * 16,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-[3rem] px-[1rem] sm:px-[1.5rem]">
      {/* Header */}
      <div className="flex items-center justify-between gap-[1rem] mb-[1.25rem]">
        {/* Left */}
        <div className="flex items-center gap-[0.75rem] min-w-0">
          {icon && (
            <div className="relative w-[2.5rem] h-[2.5rem] shrink-0">
              {icon}
            </div>
          )}

          <h2 className="truncate text-[1.25rem] sm:text-[1.5625rem] font-medium text-[#FFC522]">
            {title}
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-[0.75rem] shrink-0">
          {showSeeAll && (
            <button
              onClick={onSeeAll}
              className="
                px-[1.1rem] py-[0.45rem]
                rounded-[0.75rem]
                border border-[#363C55]
                bg-[#0C1F58]
                text-white text-[0.9rem] sm:text-[1rem]
                hover:bg-[#142B70]
                transition
              "
            >
              See all
            </button>
          )}

          {/* Desktop arrows only */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex w-[2.5rem] h-[2.5rem]
            rounded-full bg-[#2E70DA]
            items-center justify-center text-white
            hover:brightness-110 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex w-[2.5rem] h-[2.5rem]
            rounded-full bg-[#2E70DA]
            items-center justify-center text-white
            hover:brightness-110 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroll Area */}
      <div
        ref={ref}
        className="
          flex gap-[1rem] sm:gap-[1.25rem]
          overflow-x-auto scrollbar-hide
          scroll-smooth
          snap-x snap-mandatory
          pb-[0.25rem]
        "
      >
        {children}
      </div>
    </section>
  );
}
