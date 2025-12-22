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
        min-w-[11rem] sm:min-w-[12.5rem]
        h-[4.5rem] sm:h-[5rem]
        rounded-xl
        bg-gradient-to-r from-[#4A99E2] to-[#6B4CCE]
        flex items-center gap-2.5
        p-2.5
        shrink-0
        snap-start
      "
    >
      {/* Avatar */}
      <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-lg bg-white overflow-hidden shrink-0">
        <Image
          src={avatar}
          alt={username}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 44px, 56px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center min-w-0">
        <span className="text-[#FFEE00] text-sm sm:text-base font-semibold truncate">
          {username}
        </span>
        <span className="text-white text-sm sm:text-base font-semibold">
          SC {amount}
        </span>
      </div>
    </div>
  );
}
