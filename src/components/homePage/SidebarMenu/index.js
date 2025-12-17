"use client";

import Image from "next/image";
import { cards, trending, crosswheel, logo } from "@/assets/png";

import {
  Dice5,
  ChevronDown,
  Star,
  Fish,
  Crosshair,
  Ticket,
  TrendingUp,
  Spade,
} from "lucide-react";

export default function SidebarMenu() {
  return (
    <aside className="w-[340px] h-screen bg-[#18083D] overflow-y-auto text-white p-4">
      
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src={logo} // replace with your logo
          alt="RewardBlitz"
          width={220}
          height={70}
        />
      </div>

      {/* Top Cards */}
      <div className="flex gap-4 mb-6">
        <Card title="Wheel" img="/wheel.png" />
        <Card title="Promotion" img="/promotion.png" />
      </div>

      {/* Game Category */}
      <div className="border-2 border-[#3C4360] rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-[#FFC522] text-lg font-bold">
            🎲 Game Category
          </div>
          <ChevronDown />
        </div>

        <Divider />
        <MenuItem icon="🎰" label="Slots" />
        <Divider />
        <MenuItem icon="📡" label="Live Casino" />
        <Divider />
        <MenuItem icon={<Star size={20} />} label="New Games" />
        <Divider />
        <MenuItem icon="🎲" label="Table Games" />
        <Divider />
        <MenuItem icon={<Fish size={20} />} label="Fish Games" />
        <Divider />
        <MenuItem icon={<Crosshair size={20} />} label="Shooting" />
        <Divider />
        <MenuItem icon={<Ticket size={20} />} label="Scratchcards" />
        <Divider />
        <MenuItem icon={<TrendingUp size={20} />} label="Crash" />
        <Divider />
        <MenuItem icon={<Spade size={20} />} label="Blackjack" />
      </div>

      {/* Bottom Buttons */}
      <div className="mt-6 space-y-3">
        <BottomButton icon={crosswheel} label="Casino" />
        <BottomButton icon="❓" label="FAQ" />
        <BottomButton icon="🧑‍💼" label="Provider" />
        <BottomButton icon="⭐" label="Favorite" />
        <BottomButton icon="🤝" label="Refer A Friend" />
      </div>
    </aside>
  );
}

/* ---------- Components ---------- */

function Card({ title, img }) {
  return (
    <div className="w-1/2 bg-[#0C1F58] rounded-xl overflow-hidden">
      <div className="h-[90px] relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="text-center py-2 font-medium">{title}</div>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4 py-3 text-lg">
      <div className="w-8 text-center">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-white/10" />;
}

function BottomButton({ icon, label }) {
  return (
    <button className="w-full h-[50px] bg-[#0C1F58] border-2 border-[#3C4360] rounded-lg flex items-center gap-4 px-4 text-[#E7B21D] font-semibold">
      <span>{icon}</span>
      {label}
    </button>
  );
}
