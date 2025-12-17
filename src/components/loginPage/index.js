"use client";

import Image from "next/image";
import { coins, bgSmoke, logo, couple } from "@/assets/png";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0C0630] font-poppins">

      {/* Background smoke */}
      <Image
        src={bgSmoke}
        alt="smoke"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Coins (decorative, desktop only) */}
      <div className="absolute bottom-0 right-0 hidden lg:block w-[40rem] h-[40rem] opacity-5">
        <Image
          src={coins}
          alt="coins"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">

        {/* Left Image Section (desktop only) */}
        <div className="relative hidden lg:flex w-1/2 items-center justify-center">
          <div className="relative w-[32rem] xl:w-[38rem] 2xl:w-[42rem] aspect-[2/3]">
            <Image
              src={couple}
              alt="casino couple"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Login Section */}
        <div className="flex w-full lg:w-1/2 items-center justify-center px-4 sm:px-6 md:px-10">
          <div className="w-full max-w-md text-white">

            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image
                src={logo}
                alt="RewardBlitz"
                width={192}
                height={80}
                className="h-auto w-[10rem] sm:w-[12rem]"
                priority
              />
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-center text-2xl sm:text-3xl font-semibold">
              Login
            </h2>

            {/* Divider */}
            <div className="mb-6 flex items-center gap-3 text-sm">
              <span className="h-px flex-1 bg-white/50" />
              <span className="whitespace-nowrap font-medium">
                Login with email
              </span>
              <span className="h-px flex-1 bg-white/50" />
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* Username */}
              <div>
                <label className="mb-2 block text-sm">User Name</label>
                <input
                  type="text"
                  placeholder="User111"
                  className="w-full rounded-xl bg-[#18083D] border border-[#FFC522] px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#FFC522]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-roboto">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl bg-[#0C1F58] border border-white/40 px-4 py-3 text-sm sm:text-base outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white/60">
                    👁
                  </span>
                </div>
              </div>

              {/* Forgot password */}
              <p className="text-center text-sm underline cursor-pointer">
                Forgot Your Password?
              </p>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#5A2CC2] to-[#1794E7] py-3 text-sm sm:text-base font-bold tracking-wide transition hover:opacity-90"
              >
                Login
              </button>

              {/* Sign up */}
              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <span className="cursor-pointer font-medium underline">
                  Sign Up
                </span>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
