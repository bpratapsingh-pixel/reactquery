"use client";

import Image from "next/image";

export default function ProviderCard({ logo, active = false }) {
  return (
    <div
      className={`
        relative shrink-0
        w-[13.7rem] h-[4rem]
        rounded-[0.9rem]
        flex items-center justify-center
        ${
          active
            ? "bg-gradient-to-r from-[#1C4D95] to-[#37268B] shadow-[0_0_0.8rem_rgba(255,189,11,0.35)]"
            : "bg-gradient-to-r from-[#38278B] to-[#155899]"
        }
      `}
    >
      <div className="relative w-[70%] h-[60%]">
        <Image
          src={logo}
          alt="provider"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
