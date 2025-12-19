"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Menu,
  User,
  LogOut,
  Gift,
  ShoppingBag,
  ChevronDown
} from "lucide-react";
import { buyIcon, redeemIcon, logo } from "@/assets/png";

export default function Header({ onToggleSidebar }) {
  return (
    <header
      className="
        w-full
        bg-[#18083D]
        shadow-[0_0.0625rem_0.3125rem_#1794E7]
        px-3 sm:px-6
        lg:min-h-[5.5rem]
        flex items-center
        relative
      "
    >
      {/* 1. DESKTOP VIEW (lg+) */}
      <div className="hidden lg:flex items-center justify-between w-full h-[5.5rem]">
        {/* Left: Buy & Redeem */}
        <div className="flex items-center gap-3">
          <ActionButton icon={buyIcon} label="Buy" />
          <ActionButton icon={redeemIcon} label="Redeem" />
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3">
          <AuthBtn label="Login" />
          <AuthBtn label="Sign Up" variant="gradient" />
        </div>
      </div>

      {/* 2. MOBILE VIEW (<lg) */}
      <div className="flex lg:hidden items-center justify-between w-full py-3 h-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="relative w-[8rem] sm:w-[10rem] aspect-[220/70]">
            <Image src={logo} alt="Logo" fill className="object-contain" priority />
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-2">
          <AuthBtn label="Login" className="!h-9 !px-3 !text-xs !min-w-[4.5rem]" />
          <AuthBtn label="Sign Up" variant="gradient" className="!h-9 !px-3 !text-xs !min-w-[4.5rem]" />
        </div>
      </div>
    </header>
  );
}

/* ---------- Sub Components ---------- */

function DropdownItem({ icon, label, color = "text-white" }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#25125D] cursor-pointer transition-colors group">
      <span className={`${color} opacity-80 group-hover:opacity-100`}>
        {icon}
      </span>
      <span className="text-white text-sm font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}

function AuthBtn({ label, variant = "default", className = "" }) {
  const baseClasses = `
    h-[clamp(2.5rem,4vw,2.875rem)]
    px-[clamp(1.2rem,2vw,1.8rem)]
    sm:min-w-[clamp(7rem,12vw,9.5rem)]
    rounded-[0.7rem]
    text-white text-[clamp(0.85rem,1.2vw,1rem)] font-bold
    transition-all active:scale-95
  `;

  const variants = {
    default: "bg-[#0C1F58] border-2 border-[#3C4360] hover:bg-[#142B70]",
    gradient: "bg-gradient-to-br from-[#5A2CC2] to-[#1794E7] hover:opacity-90",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {label}
    </button>
  );
}

function ActionButton({ icon, label }) {
  return (
    <div
      className="
        h-[clamp(2.5rem,5.5vw,3rem)]
        px-[clamp(1rem,1.8vw,1.5rem)]
        sm:min-w-[clamp(8.5rem,12vw,10.5rem)]
        bg-[#0C1F58]
        border-2 border-[#3C4360]
        rounded-[0.7rem]
        flex items-center justify-center
        hover:bg-[#142B70] transition-colors cursor-pointer
      "
    >
      <div className="flex items-center gap-2">
        <div className="relative w-[1.7rem] sm:w-[2rem] aspect-square shrink-0">
          <Image src={icon} alt={label} fill className="object-contain" />
        </div>
        <span className="text-[#EFDB02] text-[clamp(1rem,1.4vw,1.2rem)] font-bold truncate">
          {label}
        </span>
      </div>
    </div>
  );
}
