"use client";

import Image from "next/image";
import CustomCarousel from "@/ui/CustomCarousel/CustomCarousel";
import ProviderCard from "@/ui/ProviderCard/ProviderCard";
import {
  smartSoft,
  netBet,
  rolletto,
  gamzix,
  evoplay,
  providerIcon,
} from "@/assets/png";

const providers = [
  { logo: smartSoft, active: true },
  { logo: netBet },
  { logo: rolletto },
  { logo: gamzix },
  { logo: evoplay },
  { logo: smartSoft },
  { logo: evoplay },
];

export default function ProviderSection() {
  return (
    <CustomCarousel
      title="Provider"
      icon={
        <div className="relative w-[2.8rem] h-[2.8rem]">
          <Image
            src={providerIcon}
            alt="Provider"
            fill
            className="object-contain"
          />
        </div>
      }
    >
      {providers.map((p, i) => (
        <ProviderCard key={i} logo={p.logo} active={p.active} />
      ))}
    </CustomCarousel>
  );
}
