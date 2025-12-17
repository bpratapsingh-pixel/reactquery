"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  spinwheel2,
  casinostar,
  coupon,
  casinotable,
  fish,
  gun,
} from "@/assets/png";

const tabs = [
  { label: "Slots", icon: spinwheel2 },
  { label: "Live Casino", icon: casinostar },
  { label: "New Games", icon: coupon },
  { label: "Table Games", icon: casinotable },
  { label: "Fish Games", icon: fish },
  { label: "Shooting", icon: gun },
];

export default function GameCategoryTabs() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const scrollAmount = 15 * 16; // 15rem in pixels (JS requirement)

    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-1.5rem px-1.5rem">
      <div className="relative bg-[#0C1F58] rounded-[0.9375rem] py-0.75rem px-3rem">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-0.75rem top-1/2 -translate-y-1/2
          w-[2.25rem] h-[2.25rem]
          flex items-center justify-center
          text-white text-[1.5rem] font-bold
          hover:opacity-80 transition"
        >
          ‹
        </button>

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="flex gap-1rem overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {tabs.map((tab, i) => (
            <TabItem key={i} {...tab} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-0.75rem top-1/2 -translate-y-1/2
          w-[2.25rem] h-[2.25rem]
          flex items-center justify-center
          text-white text-[1.5rem] font-bold
          hover:opacity-80 transition"
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
      className="shrink-0 flex items-center gap-0.5rem
      px-1.25rem py-0.5rem rounded-[0.9375rem]
      bg-gradient-to-r from-[#2E70DA] to-[#5A2CC2]
      text-white text-[1rem] font-medium cursor-pointer
      hover:brightness-110 transition"
    >
      <div className="relative w-[1.6rem] aspect-[1/1]">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      {label}
    </div>
  );
}
