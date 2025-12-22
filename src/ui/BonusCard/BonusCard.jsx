
"use client";

import Image from "next/image";

export default function BonusCard({
  title,
  description,
  cta = "Claim Free Coins",
  image,
  isFullWidth = false,
}) {
  return (
    <div
      className={`relative shrink-0 snap-start h-[16rem] ${isFullWidth
          ? "w-full max-w-sm"
          : "w-[85vw] sm:w-[18rem] max-w-[18rem]"
        }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[1rem] bg-cyan-400 blur-[0.6rem] opacity-30" />

      {/* Card */}
      <div
        className="
          relative h-full
          rounded-[1rem]
          bg-[#0C1F58]
          border border-[#3C4360]
          flex
          overflow-hidden
        "
      >
        {/* Left Box: TEXT + BUTTON */}
        <div className="flex-1 flex flex-col items-center justify-between p-4 text-center">
          {/* TEXT - Top */}
          <div className="w-full">
            <h3 className="text-[#DE9700] text-[1.1rem] font-bold mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-white text-[0.75rem] leading-snug opacity-85">
              {description}
            </p>
          </div>

          {/* BUTTON - Bottom */}
          <button
            className="
              w-full
              h-[2.75rem]
              rounded-[0.75rem]
              bg-gradient-to-r from-[#5A2CC2] to-[#1794E7]
              border border-[#3C4360]
              text-white font-bold text-[0.9rem]
              hover:brightness-110
              active:scale-[0.97]
              transition
            "
          >
            {cta}
          </button>
        </div>

        {/* Right Box: IMAGE */}
        <div className="w-[7rem] flex items-center justify-center py-4">
          <div className="relative w-[6rem] h-[6rem]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
