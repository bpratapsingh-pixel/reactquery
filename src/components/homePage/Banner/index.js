"use client";

import Image from "next/image";
import { banner1, banner2 } from "@/assets/png";

export default function HeroSection() {
  return (
    <section
      className="
        flex flex-col lg:flex-row
        gap-4 lg:gap-6
        px-4 sm:px-6
        mt-6
        max-w-[90rem]
        mx-auto
      "
    >
      {/* LEFT BANNER */}
      <div
        className="
          relative flex-1
          rounded-xl
          overflow-hidden
          aspect-[16/9]
          lg:aspect-[21/9]
        "
      >
        <Image
          src={banner1}
          alt="Casino Banner"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* RIGHT BANNER */}
      <div
        className="
          relative flex-1
          rounded-xl
          overflow-hidden
          aspect-[16/9]
          lg:aspect-[21/9]
        "
      >
        <Image
          src={banner2}
          alt="Game Banner"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Play Now Button */}
        <button
          className="
            absolute
            left-4 bottom-4
            sm:left-6 sm:bottom-6
            lg:left-10 lg:bottom-10
            w-[9.5rem] sm:w-[11.25rem]
            h-[3rem] sm:h-[3.25rem]
            rounded-[0.9375rem]
            bg-gradient-to-br from-[#04145D] to-[#4D29A2]
            text-white text-[1rem] sm:text-[1.125rem]
            font-bold
            border border-[#3C4360]
            hover:brightness-110
            active:scale-95
            transition
          "
        >
          Play Now
        </button>
      </div>
    </section>
  );
}
