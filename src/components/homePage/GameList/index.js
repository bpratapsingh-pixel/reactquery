"use client";

import Image from "next/image";
import { useRef } from "react";
import { tabs } from "./constant";

export default function GameCategoryTabs() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const scrollAmount = 15 * 16;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="relative bg-[#0C1F58] rounded-xl py-3 px-10">

        {/* Left Arrow (desktop only) */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="
            hidden md:flex
            absolute left-3 top-1/2 -translate-y-1/2
            w-9 h-9
            items-center justify-center
            text-white text-2xl font-bold
            hover:opacity-80 transition
          "
        >
          ‹
        </button>

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="
            flex gap-3
            overflow-x-auto scrollbar-hide
            scroll-smooth snap-x snap-mandatory
          "
        >
          {tabs.map((tab, i) => (
            <TabItem key={i} {...tab} />
          ))}
        </div>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="
            hidden md:flex
            absolute right-3 top-1/2 -translate-y-1/2
            w-9 h-9
            items-center justify-center
            text-white text-2xl font-bold
            hover:opacity-80 transition
          "
        >
          ›
        </button>
      </div>
    </section>
  );
}

/* ---------- Tab Item ---------- */

function TabItem({ icon, label }) {
  return (
    <div
      className="
        snap-start shrink-0
        flex items-center gap-2
        px-4 py-2
        rounded-xl
        bg-gradient-to-r from-[#2E70DA] to-[#5A2CC2]
        text-white
        text-sm sm:text-base
        font-medium
        cursor-pointer
        hover:brightness-110 transition
      "
    >
      <div className="relative w-6 h-6">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}
