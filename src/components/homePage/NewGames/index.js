"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel/CustomCarousel";
import GameCard from "@/ui/GameCard/GameCard";
import {
  treasureIsland,
  cyberGypsies,
  luckyWildano,
  fortuneSmash,
  cyber3x3,
  fortuneBags,
  newGameIcon,
} from "@/assets/png";

const games = [
  treasureIsland,
  cyberGypsies,
  luckyWildano,
  fortuneSmash,
  cyber3x3,
  fortuneBags,
];

export default function NewGamesSection() {
  return (
    <CustomCarousel
      title="New Games"
      icon={
        <div className="relative w-[2.8rem] h-[2.8rem] shrink-0">
          <Image
            src={newGameIcon}
            alt="New Games"
            fill
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
