"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel";
import GameCard from "@/ui/GameCard";
import {
  live1,
  live2,
  live3,
  live4,
  live5,
  live6,
  spinwheel,
} from "@/assets/png";

const games = [
  live1,
  live2,
  live3,
  live4,
  live5,
  live6,
];

export default function LiveCasinoSection() {
  return (
    <CustomCarousel
      title="Live Casino"
      icon={
        <div className="relative w-[2.8rem] h-[2.8rem] shrink-0">
          <Image
            src={spinwheel}
            alt="Live Casino"
            fill
            className="object-contain"
            priority
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
