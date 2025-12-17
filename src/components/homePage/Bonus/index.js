"use client";

import Image from "next/image";
import BonusCard from "@/ui/BonusCard";
import {
  bonusIcon,
  welcomeGift,
  purchaseGift,
  referGift,
} from "@/assets/png";

export default function BonusSection() {
  return (
    <section className="mt-[3rem] px-[1rem] sm:px-[1.5rem]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[1.5rem]">
        <div className="flex items-center gap-[0.75rem]">
          <div className="relative w-[2.5rem] h-[2.5rem]">
            <Image src={bonusIcon} alt="Bonus" fill className="object-contain" />
          </div>
          <h2 className="text-[#FFC522] text-[1.5rem] font-medium">
            Bonus
          </h2>
        </div>

        <button
          className="
            px-[1.2rem] py-[0.45rem]
            rounded-[0.75rem]
            border border-[#363C55]
            bg-[#0C1F58]
            text-white
          "
        >
          See all
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
        <BonusCard
          title="Welcome Bonus"
          description="Get started with Free Gold Coins (GC) & Sweeps Coins (SC) on sign-up. Play for fun or real prizes!"
          image={welcomeGift}
        />

        <BonusCard
          title="Purchase Bonus"
          description="Get started with Free Gold Coins (GC) & Sweeps Coins (SC) on sign-up. Play for fun or real prizes!"
          image={purchaseGift}
        />

        <BonusCard
          title="Refer A Friend"
          description="Get started with Free Gold Coins (GC) & Sweeps Coins (SC) on sign-up. Play for fun or real prizes!"
          image={referGift}
        />
      </div>
    </section>
  );
}
