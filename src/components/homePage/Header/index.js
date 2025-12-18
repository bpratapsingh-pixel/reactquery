"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { buyIcon, redeemIcon } from "@/assets/png";

export default function Header({ onToggleSidebar }) {
  return (
    <header
      className="
        w-full min-h-[6.875rem]
        bg-[#18083D]
        shadow-[0_0.0625rem_0.3125rem_#1794E7]
        flex items-center
        px-3 sm:px-6
      "
    >
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden mr-4 text-white hover:text-[#FFC522] transition"
      >
        <Menu size={32} />
      </button>

      {/* Left: Buy & Redeem */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ActionButton icon={buyIcon} label="Buy" />
        <ActionButton icon={redeemIcon} label="Redeem" />
      </div>

      {/* Right: Auth Buttons */}
      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <button
          className="
            h-[3rem] sm:h-[3.25rem]
            px-4 sm:min-w-[11.25rem]
            bg-[#0C1F58]
            border-2 border-[#3C4360]
            rounded-[0.9375rem]
            text-white text-sm sm:text-[1.125rem] font-bold
            hover:bg-[#142B70] transition
          "
        >
          Login
        </button>

        <button
          className="
            h-[3rem] sm:h-[3.25rem]
            px-4 sm:min-w-[11.25rem]
            rounded-[0.9375rem]
            text-white text-sm sm:text-[1.125rem] font-bold
            bg-gradient-to-br from-[#5A2CC2] to-[#1794E7]
            hover:opacity-90 transition
          "
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

/* ---------- Sub Components ---------- */

function ActionButton({ icon, label }) {
  return (
    <div
      className="
        h-[3rem] sm:h-[3.875rem]
        px-3 sm:min-w-[11.8125rem]
        bg-[#0C1F58]
        border-2 border-[#3C4360]
        rounded-[0.9375rem]
        flex items-center justify-center
      "
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative w-[2rem] sm:w-[2.8125rem] aspect-square">
          <Image src={icon} alt={label} fill className="object-contain" />
        </div>

        {/* Hide text on very small screens */}
        <span className="hidden sm:block text-[#EFDB02] text-[1.5rem] font-semibold">
          {label}
        </span>
      </div>
    </div>
  );
}
