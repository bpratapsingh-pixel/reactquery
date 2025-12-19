"use client";

import Image from "next/image";
import { PROVIDER_CARD_COLORS } from "@/common/colors";

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
        ${active
          ? `${PROVIDER_CARD_COLORS.active} ${PROVIDER_CARD_COLORS.shadow}`
          : PROVIDER_CARD_COLORS.inactive
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
