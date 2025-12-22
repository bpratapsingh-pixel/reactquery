"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel/CustomCarousel";
import GameCard from "@/ui/GameCard/GameCard";
import {
  doubleDragonRoulette,
  andarBahar,
  teenPatti,
  speedHilo,
  tableIcon,
} from "@/assets/png";

const games = [
  doubleDragonRoulette,
  andarBahar,
  teenPatti,
  speedHilo,
  andarBahar,
  doubleDragonRoulette,
];

export default function TableGamesSection() {
  return (
    <CustomCarousel
      title="Table Games"
      icon={
        <div className="relative w-[2.8rem] h-[2.8rem]">
          <Image
            src={tableIcon}
            alt="Table Games"
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
