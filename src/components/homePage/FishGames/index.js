"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel";
import GameCard from "@/ui/GameCard";
import {
  sharkHunter,
  amazingCatch,
  crabTrap,
  crazyFishin,
  fantasticLobsters,
  fishIcon,
} from "@/assets/png";

const games = [
  sharkHunter,
  amazingCatch,
  crabTrap,
  crazyFishin,
  fantasticLobsters,
  amazingCatch,
];

export default function FishGamesSection() {
  return (
    <CustomCarousel
      title="Fish Games"
      icon={
        <div className="relative w-[2.8rem] h-[2.8rem]">
          <Image
            src={fishIcon}
            alt="Fish Games"
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
