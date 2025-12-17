"use client";

import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div
      className="
        flex items-center gap-3
        w-full sm:w-[17.125rem]
        h-[3.25rem] sm:h-[3.75rem]
        bg-[#0C1F58]
        border-2 border-[#3C4360]
        rounded-xl
        px-4
        focus-within:border-[#5A2CC2]
        focus-within:ring-2 focus-within:ring-[#5A2CC2]/30
        transition
      "
    >
      {/* Search Icon */}
      <Search
        className="
          w-5 h-5 sm:w-6 sm:h-6
          text-[#EBEAEA]
          shrink-0
        "
        strokeWidth={1.5}
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for games..."
        aria-label="Search games"
        className="
          flex-1 bg-transparent outline-none
          text-base sm:text-lg
          text-[#EBEAEA]
          placeholder:text-[#EBEAEA]/80
        "
      />
    </div>
  );
}
