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
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function Header({ onToggleSidebar }) {
  const { user, logout } = useAuth();

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

        {/* Right: Auth Buttons or User Profile */}
        <div className="flex items-center gap-3">
          {user ? (
            <UserProfile user={user} logout={logout} />
          ) : (
            <>
              <Link href="/loginSignUpPage">
                <AuthBtn label="Login" />
              </Link>
              <Link href="/loginSignUpPage">
                <AuthBtn label="Sign Up" variant="gradient" />
              </Link>
            </>
          )}
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
          {user ? (
            <UserProfile user={user} logout={logout} isMobile />
          ) : (
            <>
              <Link href="/loginSignUpPage">
                <AuthBtn label="Login" className="!h-9 !px-3 !text-xs !min-w-[4.5rem]" />
              </Link>
              <Link href="/loginSignUpPage">
                <AuthBtn label="Sign Up" variant="gradient" className="!h-9 !px-3 !text-xs !min-w-[4.5rem]" />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function UserProfile({ user, logout, isMobile }) {
  return (
    <div className="relative group z-50">
      <div className={`flex items-center gap-3 cursor-pointer ${isMobile ? '' : 'bg-[#0C1F58] px-4 py-2 rounded-xl border border-[#3C4360]'}`}>
        <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#1794E7]">
          <Image src={user.avatar || "https://i.pravatar.cc/150"} alt="User" fill className="object-cover" />
        </div>
        {!isMobile && (
          <div className="flex flex-col">
            <span className="text-white text-sm font-bold leading-tight">{user.name}</span>
            <span className="text-[#1794E7] text-xs font-medium">Level 5</span>
          </div>
        )}
        {!isMobile && <ChevronDown size={16} className="text-gray-400 group-hover:rotate-180 transition-transform" />}
      </div>

      {/* Dropdown Menu (Visible on Hover) */}
      <div className="absolute right-0 top-full mt-2 w-48 bg-[#18083D] border border-[#3C4360] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right overflow-hidden">
        <div className="p-3 border-b border-[#3C4360]/50">
          <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Account</span>
        </div>
        <div onClick={logout} className="flex items-center gap-3 px-4 py-3 hover:bg-[#25125D] cursor-pointer text-red-400 hover:text-red-300 transition-colors">
          <LogOut size={16} />
          <span className="text-sm font-medium">Logout</span>
        </div>
      </div>
    </div>
  )
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
