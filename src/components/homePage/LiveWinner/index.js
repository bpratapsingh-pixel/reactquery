"use client";

import Image from "next/image";
import { trophyIcon } from "@/assets/png";
import winners from "./data/liveWinners";

export default function LiveWinners() {
  return (
    <section className="mt-8 px-4 sm:px-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative w-9 h-9">
          <Image
            src={trophyIcon}
            alt="Live Winners"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-white text-xl sm:text-2xl font-semibold">
          Live Winners
        </h2>
      </div>

      {/* Winners Row */}
      <div
        className="
          flex gap-4
          overflow-x-auto
          scrollbar-hide
          pb-2
          snap-x snap-mandatory
        "
      >
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
    <div
      className="
        min-w-[13rem] sm:min-w-[14.25rem]
        h-[5.75rem] sm:h-[6.35rem]
        rounded-xl
        bg-gradient-to-r from-[#4A99E2] to-[#6B4CCE]
        flex items-center gap-3
        p-3
        shrink-0
        snap-start
      "
    >
      {/* Avatar */}
      <div className="relative w-14 h-14 sm:w-[5.5rem] sm:h-[5.5rem] rounded-lg bg-white overflow-hidden shrink-0">
        <Image
          src={avatar}
          alt={username}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center min-w-0">
        <span className="text-[#FFEE00] text-base sm:text-lg font-semibold truncate">
          {username}
        </span>
        <span className="text-white text-base sm:text-lg font-semibold">
          SC {amount}
        </span>
      </div>
    </div>
  );
}
