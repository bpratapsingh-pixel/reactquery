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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        {/* Left: Menu Toggle */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={onToggleSidebar}
            className="text-white hover:text-[#FFC522] transition"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0">
          <div className="relative w-[10rem] sm:w-[12rem] aspect-[220/70]">
            <Image src={logo} alt="Logo" fill className="object-contain" priority />
          </div>
        </div>

        {/* Right: Action Dropdown */}
        <div className="flex-1 flex justify-end relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="
              flex items-center gap-1.5 
              bg-[#0C1F58] border border-[#3C4360] 
              px-3 py-1.5 rounded-full 
              text-white text-[0.85rem] font-bold
              transition active:scale-95
            "
          >
            <User size={18} className="text-[#FFC522]" />
            <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              {/* Overlay to close on click outside */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute top-full right-0 mt-2 w-44 bg-[#18083D] border border-[#3C4360] rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <DropdownItem icon={<ShoppingBag size={18} />} label="Buy" />
                <DropdownItem icon={<Gift size={18} />} label="Redeem" />
                <div className="h-px bg-white/10 mx-2" />
                <DropdownItem icon={<User size={18} />} label="Login" color="text-green-400" />
                <DropdownItem icon={<LogOut size={18} />} label="Logout" color="text-red-400" />
              </div>
            </>
          )}
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
