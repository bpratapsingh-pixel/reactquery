"use client";

import Image from "next/image";
import { buyIcon, redeemIcon } from "@/assets/png";

export default function Header() {
  return (
    <header className="w-full min-h-[6.875rem] bg-[#18083D] shadow-[0_0.0625rem_0.3125rem_#1794E7] flex items-center px-1.5rem">

      {/* Left: Buy & Redeem */}
      <div className="flex items-center gap-2rem">
        <ActionButton icon={buyIcon} label="Buy" />
        <ActionButton icon={redeemIcon} label="Redeem" />
      </div>

      {/* Right: Auth Buttons */}
      <div className="ml-auto flex items-center gap-1.5rem">
        <button className="min-w-[11.25rem] h-[3.25rem] bg-[#0C1F58] border-[0.125rem] border-[#3C4360] rounded-[0.9375rem] text-white text-[1.125rem] font-bold hover:bg-[#142B70] transition">
          Login
        </button>

        <button className="min-w-[11.25rem] h-[3.25rem] rounded-[0.9375rem] text-white text-[1.125rem] font-bold bg-gradient-to-br from-[#5A2CC2] to-[#1794E7] hover:opacity-90 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
}

/* ---------- Sub Components ---------- */

function ActionButton({ icon, label }) {
  return (
    <div className="min-w-[11.8125rem] h-[3.875rem] bg-[#0C1F58] border-[0.125rem] border-[#3C4360] rounded-[0.9375rem] flex items-center justify-center">
      <div className="flex items-center gap-1rem">
        <div className="relative w-[2.8125rem] aspect-[1/1]">
          <Image src={icon} alt={label} fill className="object-contain" />
        </div>
        <span className="text-[#EFDB02] text-[1.5rem] font-semibold">
          {label}
        </span>
      </div>
    </div>
  );
}
