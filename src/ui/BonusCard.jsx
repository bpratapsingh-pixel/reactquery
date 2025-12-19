"use client";

import Image from "next/image";

export default function BonusCard({
  title,
  description,
  cta = "Claim Free Coins",
  image,
}) {
  return (
    <div className="relative shrink-0 snap-start w-[85vw] sm:w-[20rem] max-w-[20rem] h-[26rem]">
      {/* Glow */}
      <div className="absolute inset-0 rounded-[1.25rem] bg-cyan-400 blur-[0.8rem] opacity-40" />

      {/* Card */}
      <div
        className="
          relative h-full
          rounded-[1.25rem]
          bg-[#0C1F58]
          border border-[#3C4360]
          p-6
          flex flex-col
          items-center
          text-center
          gap-4
        "
      >
        {/* 1. TEXT */}
        <div>
          <h3 className="text-[#DE9700] text-[1.25rem] sm:text-[1.4rem] font-bold mb-2">
            {title}
          </h3>
          <p className="text-white text-[0.8rem] sm:text-[0.85rem] leading-relaxed opacity-90">
            {description}
          </p>
        </div>

        {/* 2. IMAGE */}
        <div className="relative w-full aspect-square max-w-[10rem] my-auto">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-2xl scale-110"
          />
        </div>

        {/* 3. BUTTON */}
        <button
          className="
            w-full
            h-[3.25rem]
            rounded-[0.9rem]
            bg-gradient-to-r from-[#5A2CC2] to-[#1794E7]
            border border-[#3C4360]
            text-white font-bold
            hover:brightness-110
            active:scale-[0.97]
            transition
            mt-auto
          "
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
