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
    <footer className="bg-gradient-to-b from-[#37287B] to-[#0A143D] mt-[4rem]">
      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-[2rem] py-[4rem]">

        {/* Logo */}
        <div className="flex justify-center mb-[3rem] ">
          <Image
            src={logo}
            alt="rewardblitz"
            width={21}
            height={9}
            className="w-[21rem] h-auto"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] text-[0.875rem]">

          {/* Social + Contact */}
          <div className="space-y-[1.5rem]">
            <h4 className="text-[#FFC522] font-semibold text-[1rem]">
              Social Media
            </h4>

            <div className="flex gap-[1rem]">
              {[instagram, twitter, telegram, facebook].map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  alt="social"
                  width={2.25 * 16}
                  height={2.25 * 16}
                  className="w-[2.25rem] h-[2.25rem] cursor-pointer hover:scale-110 transition"
                />
              ))}
            </div>

            <div className="space-y-[0.75rem]">
              <h4 className="text-[#FFC522] font-semibold underline">
                Contact Us
              </h4>
              <p className="underline text-[#EBEEF4]">
                Support: support@rewardblitz.fun
              </p>
              <p className="underline text-[#EBEEF4]">
                Legal: legal@rewardblitz.fun
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-[1rem]">
            <h4 className="text-[#FFC522] font-semibold underline">
              Features
            </h4>
            {[
              "rewardblitz.fun Favorites",
              "Live Win",
              "Top Games",
              "Slot Games",
              "Jackpot Play",
              "Unlimited Play",
            ].map((item) => (
              <p key={item} className="underline cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          {/* Slots Volatility */}
          <div className="space-y-[1rem]">
            <h4 className="text-[#FFC522] font-semibold underline">
              Slots Volatility
            </h4>
            {[
              "Low Volatility Slots",
              "Medium Volatility Slots",
              "High Volatility Slots",
            ].map((item) => (
              <p key={item} className="underline cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          {/* About */}
          <div className="space-y-[1rem]">
            <h4 className="text-[#FFC522] font-semibold underline">
              About New Brand
            </h4>
            {[
              "Sweepstakes Rules",
              "Privacy Policy",
              "Terms & Conditions",
              "Responsible Gambling",
              "Bonus Terms",
              "Customer Acceptance Policy",
            ].map((item) => (
              <p key={item} className="underline cursor-pointer text-[#EBEEF4]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1B0B46] py-[1rem] text-center text-[0.875rem] text-white">
        ©2025 rewardblitz.fun All Rights Reserved.
      </div>
    </footer>
  );
}
