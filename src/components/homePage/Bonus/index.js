"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel";
import BonusCard from "@/ui/BonusCard";
import {
  bonusIcon,
  welcomeGift,
  purchaseGift,
  referGift,
} from "@/assets/png";

export default function BonusSection() {
  return (
    <CustomCarousel
      title="Bonus"
      icon={
        <Image src={bonusIcon} alt="Bonus" fill className="object-contain" />
      }
    >
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
    </CustomCarousel>
  );
}
