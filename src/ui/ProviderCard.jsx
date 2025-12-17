"use client";

import Image from "next/image";

export default function ProviderCard({ logo, active = false }) {
  return (
    <div
      className={`
        relative shrink-0 snap-start
        w-[10.5rem] h-[3.75rem]        /* mobile */
        sm:w-[12rem] sm:h-[4rem]       /* tablet */
        lg:w-[13.7rem] lg:h-[4rem]     /* desktop */
        rounded-[0.9rem]
        flex items-center justify-center
        transition-all duration-200
        ${
          active
            ? "bg-gradient-to-r from-[#1C4D95] to-[#37268B] shadow-[0_0_0.8rem_rgba(255,189,11,0.35)]"
            : "bg-gradient-to-r from-[#38278B] to-[#155899]"
        }
        hover:brightness-110
        active:scale-[0.97]
      `}
    >
      {/* Logo */}
      <div className="relative w-[70%] h-[60%]">
        <Image
          src={logo}
          alt="provider logo"
          fill
          className="object-contain"
          sizes="
            (max-width: 640px) 40vw,
            (max-width: 1024px) 25vw,
            14rem
          "
          priority={false}
        />
      </div>
    </div>
  );
}
