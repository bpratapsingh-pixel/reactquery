"use client";

import Image from "next/image";
import { trophyIcon } from "@/assets/png"; // use your icon
import winners from "./data/liveWinners"; // array data (shown below)

export default function LiveWinners() {
  return (
    <section className="mt-2rem px-1.5rem">

      {/* Header */}
      <div className="flex items-center gap-0.75rem mb-1.25rem">
        <div className="relative w-[2.2rem] aspect-[1/1]">
          <Image src={trophyIcon} alt="Live Winners" fill className="object-contain" />
        </div>
        <h2 className="text-white text-[1.5rem] font-semibold">
          Live Winners
        </h2>
      </div>

      {/* Winners Row */}
      <div className="flex gap-1rem overflow-x-auto scrollbar-hide pb-0.5rem">
        {winners.map((item, index) => (
          <WinnerCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function WinnerCard({ avatar, username, amount }) {
  return (
    <div className="min-w-[14.25rem] h-[6.35rem] rounded-[0.85rem]
      bg-gradient-to-r from-[#4A99E2] to-[#6B4CCE]
      flex items-center gap-0.75rem p-0.75rem shrink-0">

      {/* Avatar */}
      <div className="relative w-[5.5rem] aspect-[1/1] rounded-[0.75rem] bg-white overflow-hidden">
        <Image src={avatar} alt={username} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center leading-tight">
        <span className="text-[#FFEE00] text-[1.1rem] font-semibold">
          {username}
        </span>
        <span className="text-white text-[1.1rem] font-semibold">
          SC {amount}
        </span>
      </div>
    </div>
  );
}
