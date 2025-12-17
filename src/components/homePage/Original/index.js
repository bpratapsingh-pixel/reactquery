"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel";
import GameCard from "@/ui/GameCard";
import {
  goldenDragon,
  fireKirin,
  ultraPanda,
  orionStars,
  firePhoenix,
  pandora,
  milkyWays,
  magicCity,
  vBlink,
  juwa777,
  riverSweep,
  crownIcon, 
} from "@/assets/png";

const games = [
  goldenDragon,
  fireKirin,
  ultraPanda,
  orionStars,
  firePhoenix,
  pandora,
  milkyWays,
  magicCity,
  vBlink,
  juwa777,
  riverSweep,
  pandora,
];

export default function OriginalSection() {
  return (
    <CustomCarousel
      title="Original"
      icon={
        <Image
          src={crownIcon}
          alt="Original"
          fill
          className="object-contain"
        />
      }
    >
      {games.map((img, i) => (
        <GameCard key={i} img={img} />
      ))}
    </CustomCarousel>
  );
}
