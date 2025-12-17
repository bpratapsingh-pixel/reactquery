"use client";

import { useState } from "react";
import Image from "next/image";
import {
  cards,
  trending,
  crosswheel,
  logo,
  casinostar,
  casinotable,
  coupon,
  dice,
  discount60,
  fish,
  gun,
  spingear,
  spinwheel,
  spinwheel2,
} from "@/assets/png";
import { X } from "lucide-react";

export default function SidebarMenu({ isOpen, onClose }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} lg:hidden`}
      />

      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-full w-[21.25rem]
          bg-[#18083D] text-white
          overflow-y-auto
          px-4 py-6
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-white"
        >
          <X size={28} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[13.75rem] aspect-[220/70]">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
        </div>

        {/* Top Cards */}
        <div className="flex gap-4 mb-6">
          <TopCard title="Wheel" img={spinwheel} />
          <TopCard title="Promotion" img={discount60} />
        </div>

        {/* Game Category */}
        <div className="border-2 border-[#3C4360] rounded-[0.9375rem] p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-2 text-[#FFC522] font-bold">
              <Image src={dice} alt="dice" width={22} height={22} />
              Game Category
            </div>

            <span
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
            >
              ^
            </span>
          </div>

          {open && (
            <div className="mt-3 space-y-2">
              <MenuItem icon={spinwheel2} label="Slots" />
              <MenuItem icon={casinostar} label="Live Casino" />
              <MenuItem icon={coupon} label="New Games" />
              <MenuItem icon={casinotable} label="Table Games" />
              <MenuItem icon={fish} label="Fish Games" />
              <MenuItem icon={gun} label="Shooting" />
              <MenuItem icon={trending} label="Crash" />
              <MenuItem icon={cards} label="Blackjack" />
            </div>
          )}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-6 space-y-3">
          <BottomButton icon={crosswheel} label="Casino" />
          <BottomButton icon={coupon} label="FAQ" />
          <BottomButton icon={spingear} label="Provider" />
          <BottomButton icon={casinostar} label="Favorite" />
          <BottomButton icon={discount60} label="Refer A Friend" />
        </div>
      </aside>
    </>
  );
}

function TopCard({ title, img }) {
  return (
    <div className="flex-1 bg-[#0C1F58] rounded-lg overflow-hidden">
      <div className="relative aspect-[3/1]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <p className="text-center py-1 text-sm">{title}</p>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4 py-2 cursor-pointer hover:text-[#FFC522]">
      <Image src={icon} alt={label} width={24} height={24} />
      <span>{label}</span>
    </div>
  );
}

function BottomButton({ icon, label }) {
  return (
    <button className="w-full h-[3.125rem] bg-[#0C1F58] border-2 border-[#3C4360] rounded-lg flex items-center gap-4 px-4 text-[#E7B21D] font-semibold hover:bg-[#142B70]">
      <Image src={icon} alt={label} width={22} height={22} />
      {label}
    </button>
  );
}
