"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel/CustomCarousel";
import GameCard from "@/ui/GameCard/GameCard";
import {
  joker,
  lucky,
  panda,
  bullets,
  dragon,
  moon,
  slotIcon,
} from "@/assets/png";

const games = [
  joker,
  lucky,
  panda,
  bullets,
  dragon,
  moon,
];

export default function SlotsSection() {
  return (
    <CustomCarousel
      title="Slots"
      icon={
        <div className="relative w-[2.8rem] h-[2.8rem] shrink-0">
          <Image
            src={slotIcon}
            alt="Slots"
            fill
            priority
            className="object-contain"
          />
        </div>
      }
    >
      {games.map((img, index) => (
        <GameCard key={index} img={img} />
      ))}
    </CustomCarousel>
  );
}
