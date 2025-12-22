"use client";

import Image from "next/image";

export default function GameCard({ img }) {
  return (
    <div
      className="
        relative shrink-0 snap-start
        w-[30vw] sm:w-[22vw] md:w-[15vw] lg:w-[11.5vw] xl:w-[9.5vw] 2xl:w-[8.5vw]
        max-w-[13.5rem]
        aspect-[13.9/19.4]
        rounded-[0.5rem] sm:rounded-[0.75rem]
        bg-gradient-to-b
        from-[#36278C] via-[#FFBD0B] to-[#1A3E7C]
        transition-transform duration-200
        hover:scale-[1.03]
        active:scale-[0.97]
      "
    >
      {/* Inner card */}
      <div className="absolute inset-[0.2rem] sm:inset-[0.35rem] rounded-[0.4rem] sm:rounded-[0.6rem] bg-[#0C0630] overflow-hidden">
        <Image
          src={img}
          alt="game"
          fill
          className="object-cover"
          sizes="
            (max-width: 640px) 38vw,
            (max-width: 1024px) 20vw,
            13rem
          "
          priority={false}
        />
      </div>
    </div>
  );
}
