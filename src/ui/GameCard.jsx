"use client";

import Image from "next/image";

export default function GameCard({ img }) {
  return (
    <div
      className="
        relative shrink-0 snap-start
        w-[11.5rem] h-[16rem]          /* mobile */
        sm:w-[12.5rem] sm:h-[17.5rem]  /* tablet */
        lg:w-[13.9rem] lg:h-[19.4rem]  /* desktop */
        rounded-[0.75rem]
        bg-gradient-to-b
        from-[#36278C] via-[#FFBD0B] to-[#1A3E7C]
        transition-transform duration-200
        hover:scale-[1.03]
        active:scale-[0.97]
      "
    >
      {/* Inner card */}
      <div className="absolute inset-[0.35rem] rounded-[0.6rem] bg-[#0C0630] overflow-hidden">
        <Image
          src={img}
          alt="game"
          fill
          className="object-cover"
          sizes="
            (max-width: 640px) 45vw,
            (max-width: 1024px) 25vw,
            14rem
          "
          priority={false}
        />
      </div>
    </div>
  );
}
