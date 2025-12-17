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
        <div className="relative w-[2.8rem] h-[2.8rem]">
          <Image
            src={spinwheel}
            alt="Live Casino"
            fill
            className="object-contain"
          />
        </div>
      }
    >
      {games.map((img, i) => (
        <GameCard key={i} img={img} />
      ))}
    </CustomCarousel>
  );
}
