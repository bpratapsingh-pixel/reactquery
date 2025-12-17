"use client";

import Image from "next/image";
import { banner1, banner2 } from "@/assets/png";

export default function HeroSection() {
  return (
    <section
      className="
        flex flex-col lg:flex-row
        gap-[1.5rem]
        px-[1.5rem]
        mt-[2rem]
        max-w-[90rem]
        mx-auto
      "
    >
      {/* LEFT BANNER (image only) */}
      <div
        className="
          relative flex-1
          rounded-[1rem]
          overflow-hidden
          min-h-[22rem]
          lg:min-h-[28rem]
        "
      >
        <Image
          src={banner1}
          alt="Casino Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* RIGHT BANNER (image + button only) */}
      <div
        className="
          relative flex-1
          rounded-[1rem]
          overflow-hidden
          min-h-[22rem]
          lg:min-h-[28rem]
        "
      >
        <Image
          src={banner2}
          alt="Game Banner"
          fill
          className="object-cover"
        />

        {/* Play Now Button */}
        <button
          className="
            absolute
            left-[2.5rem]
            bottom-[2.5rem]
            w-[11.25rem]
            h-[3.25rem]
            rounded-[0.9375rem]
            bg-gradient-to-br from-[#04145D] to-[#4D29A2]
            text-white text-[1.125rem] font-bold
            border-[0.0625rem] border-[#3C4360]
            hover:brightness-110
            active:scale-[0.95]
            transition
          "
        >
          Play Now
        </button>
      </div>
    </section>
  );
}
