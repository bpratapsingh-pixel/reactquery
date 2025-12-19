"use client";

import Image from "next/image";
import {
  facebook,
  instagram,
  twitter,
  telegram,
  logo,
} from "@/assets/png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2A2166] via-[#1B164F] to-[#0A143D] mt-20">
      {/* CONTENT */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 py-16">

        {/* LOGO CENTER */}
        <div className="flex justify-center mb-14">
          <div className="relative w-[16rem] lg:w-[20rem] aspect-[5/2]">
            <Image
              src={logo}
              alt="rewardblitz.fun"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-[#E6E8F0]">

          {/* SOCIAL + CONTACT */}
          <div className="space-y-6">
            <h4 className="text-[#FFC522] font-semibold">Social Media</h4>

            <div className="flex gap-4">
              {[instagram, twitter, telegram, facebook].map((icon, i) => (
                <button
                  key={i}
                  className="w-[clamp(2.25rem,4vw,2.5rem)] h-[clamp(2.25rem,4vw,2.5rem)] rounded-full bg-[#1B2C6B]
                  flex items-center justify-center
                  hover:scale-110 transition active:scale-95"
                >
                  <Image src={icon} alt="social" width={20} height={20} />
                </button>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-[#FFC522] font-semibold">Contact Us</h4>
              <p className="underline break-all">
                Support: support@rewardblitz.fun
              </p>
              <p className="underline break-all">
                Legal: legal@rewardblitz.fun
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-3">
            <h4 className="text-[#FFC522] font-semibold">Features</h4>
            {[
              "rewardblitz.fun Favorites",
              "Live Win",
              "Top Games",
              "Slot Games",
              "Jackpot Play",
              "Unlimited Play",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-[#FFC522] transition"
              >
                {item}
              </p>
            ))}
          </div>

          {/* SLOT VOLATILITY */}
          <div className="space-y-3">
            <h4 className="text-[#FFC522] font-semibold">Slots Volatility</h4>
            {[
              "Low Volatility Slots",
              "Medium Volatility Slots",
              "High Volatility Slots",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-[#FFC522] transition"
              >
                {item}
              </p>
            ))}
          </div>

          {/* ABOUT */}
          <div className="space-y-3">
            <h4 className="text-[#FFC522] font-semibold">About New Brand</h4>
            {[
              "Sweepstakes Rules",
              "Privacy Policy",
              "Terms & Conditions",
              "Responsible Gambling",
              "Bonus Terms",
              "Customer Acceptance Policy",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-[#FFC522] transition"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#140A3A] py-4 text-center text-xs text-white/80">
        ©2025 rewardblitz.fun All Rights Reserved.
      </div>
    </footer>
  );
}
