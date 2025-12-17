"use client";

import Image from "next/image";

export default function GameCard({ img }) {
  return (
    <div
      className="
        relative shrink-0
        w-[13.9rem] h-[19.4rem]
        sm:w-[12.5rem] sm:h-[17.5rem]
        xs:w-[11.5rem] xs:h-[16rem]
        rounded-[0.75rem]
        bg-gradient-to-b from-[#36278C] via-[#FFBD0B] to-[#1A3E7C]
      "
    >
      <div className="absolute inset-[0.35rem] bg-[#0C0630] rounded-[0.6rem] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={img}
            alt="game"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 14rem"
          />
        </div>
      </div>
    </div>
  );
}
