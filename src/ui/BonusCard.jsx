"use client";

import Image from "next/image";

export default function BonusCard({
  title,
  description,
  cta = "Claim Free Coins",
  image,
}) {
  return (
    <div className="relative w-full max-w-[26rem] h-[15.5rem]">
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-[1rem] bg-cyan-400 blur-[0.8rem] opacity-60" />

      {/* Card */}
      <div className="relative h-full rounded-[1rem] bg-[#0C1F58] p-[1.5rem] border border-[#3C4360] flex justify-between">
        {/* Left */}
        <div className="flex flex-col justify-between max-w-[65%]">
          <div>
            <h3 className="text-[#DE9700] text-[1.5rem] font-semibold mb-[0.5rem]">
              {title}
            </h3>

            <p className="text-white text-[0.875rem] leading-[1.3rem]">
              {description}
            </p>
          </div>

          <button
            className="
              mt-[1rem]
              w-[15rem] h-[3.25rem]
              rounded-[0.9rem]
              bg-gradient-to-r from-[#5A2CC2] to-[#1794E7]
              border border-[#3C4360]
              text-white font-bold
              hover:brightness-110
              transition
            "
          >
            {cta}
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-[6.5rem] h-[8.5rem] self-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
