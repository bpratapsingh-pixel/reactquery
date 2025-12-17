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

export default function SidebarMenu() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="w-[21.25rem] bg-[#18083D] overflow-y-auto text-white px-1rem py-1.5rem">

      {/* Logo */}
      <div className="flex justify-center mb-1.5rem">
        <div className="relative w-[13.75rem] aspect-[220/70]">
          <Image src={logo} alt="Logo" fill className="object-contain" />
        </div>
      </div>

      {/* Top Cards */}
      <div className="flex gap-1rem mb-1.5rem">
        <TopCard title="Wheel" img={spinwheel} />
        <TopCard title="Promotion" img={discount60} />
      </div>

      {/* Game Category */}
      <div className="border-[0.125rem] border-[#3C4360] rounded-[0.9375rem] p-1rem">
        <div
          className="flex items-center justify-between mb-0.75rem cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-0.5rem text-[#FFC522] text-[1.125rem] font-bold">
            <div className="relative w-[1.375rem] aspect-[1/1]">
              <Image src={dice} alt="dice" fill className="object-contain" />
            </div>
            Game Category
          </div>

          {/* Arrow */}
          <div
            className={`text-[1.25rem] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ^
          </div>
        </div>

        {open && (
          <>
            <Divider />
            <MenuItem icon={spinwheel2} label="Slots" />
            <Divider />
            <MenuItem icon={casinostar} label="Live Casino" />
            <Divider />
            <MenuItem icon={coupon} label="New Games" />
            <Divider />
            <MenuItem icon={casinotable} label="Table Games" />
            <Divider />
            <MenuItem icon={fish} label="Fish Games" />
            <Divider />
            <MenuItem icon={gun} label="Shooting" />
            <Divider />
            <MenuItem icon={trending} label="Crash" />
            <Divider />
            <MenuItem icon={cards} label="Blackjack" />
          </>
        )}
      </div>

      {/* Bottom Buttons */}
      <div className="mt-1.5rem space-y-0.75rem">
        <BottomButton icon={crosswheel} label="Casino" />
        <BottomButton icon={coupon} label="FAQ" />
        <BottomButton icon={spingear} label="Provider" />
        <BottomButton icon={casinostar} label="Favorite" />
        <BottomButton icon={discount60} label="Refer A Friend" />
      </div>
    </aside>
  );
}

/* ---------- Components ---------- */

function TopCard({ title, img }) {
  return (
    <div className="flex-1 bg-[#0C1F58] rounded-[0.75rem] overflow-hidden">
      <div className="relative aspect-[3/1]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="text-center py-0.5rem font-medium text-[0.875rem]">
        {title}
      </div>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-1rem py-0.75rem text-[1rem] cursor-pointer hover:text-[#FFC522] transition">
      <div className="relative w-[1.5rem] aspect-[1/1]">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      <span>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-[0.0625rem] bg-white/10" />;
}

function BottomButton({ icon, label }) {
  return (
    <button className="w-full h-[3.125rem] bg-[#0C1F58] border-[0.125rem] border-[#3C4360] rounded-[0.625rem] flex items-center gap-1rem px-1rem text-[#E7B21D] font-semibold hover:bg-[#142B70] transition">
      <div className="relative w-[1.375rem] aspect-[1/1]">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      {label}
    </button>
  );
}
