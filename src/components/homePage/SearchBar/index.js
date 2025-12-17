"use client";

import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div
      className="flex items-center gap-0.75rem
      w-[17.125rem] h-[3.75rem]
      bg-[#0C1F58]
      border-[0.125rem] border-[#3C4360]
      rounded-[0.9375rem]
      px-1.5rem
      focus-within:border-[#5A2CC2]
      transition"
    >
      {/* Search Icon */}
      <Search
        className="w-[1.5rem] h-[1.5rem] text-[#EBEAEA] shrink-0"
        strokeWidth={1.5}
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for Games......"
        aria-label="Search games"
        className="flex-1 bg-transparent outline-none
        text-[1.125rem] font-normal
        text-[#EBEAEA]
        placeholder:text-[#EBEAEA]
        placeholder:opacity-80"
      />
    </div>
  );
}
