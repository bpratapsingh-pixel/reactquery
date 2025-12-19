"use client";

import Image from "next/image";
import { coins, bgSmoke, logo, couple } from "@/assets/png";
import UserForm from "./UserForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SIGNIN, SIGNUP } from "./constant";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0C0630] font-poppins text-white selection:bg-[#FFC522] selection:text-[#0C0630]">
      {/* Background smoke */}
      <Image
        src={bgSmoke}
        alt="smoke"
        fill
        priority
        className="object-cover opacity-40 sm:opacity-50 lg:opacity-60"
      />

      {/* Decorative Coins (tablet/desktop only) */}
      <div className="absolute bottom-0 right-0 hidden md:block w-[20rem] h-[20rem] lg:w-[35rem] lg:h-[35rem] xl:w-[45rem] xl:h-[45rem] opacity-5 pointer-events-none">
        <Image src={coins} alt="coins" fill className="object-contain" />
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row items-stretch">

        {/* Left Image Section (desktop only) */}
        <div className="relative hidden lg:flex w-full lg:w-1/2 items-center justify-center p-8">
          <div className="relative w-full max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[40rem] aspect-[2/3] animate-float">
            <Image
              src={couple}
              alt="casino couple"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(23,148,231,0.3)]"
            />
          </div>
        </div>

        {/* Right Login Section */}
        <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-4 py-12 sm:px-8 md:px-12 lg:px-16 overflow-y-auto">
          <div className="w-full max-w-[24rem] sm:max-w-[28rem] space-y-6 sm:space-y-8">

            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[10rem] sm:w-[12rem] lg:w-[14rem] aspect-[220/80]">
                <Image
                  src={logo}
                  alt="RewardBlitz"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              {/* Heading */}
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </h2>
                <p className="text-white/60 text-sm sm:text-base">
                  {isSignUp
                    ? "Join RewardBlitz and start winning today!"
                    : "Enter your credentials to access your account."}
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 text-xs sm:text-sm uppercase tracking-widest text-white/40 mb-8">
                <span className="h-px flex-1 bg-white/10" />
                <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              {/* Form Component */}
              <UserForm
                controls={isSignUp ? SIGNUP : SIGNIN}
                control={control}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                isSignUp={isSignUp}
                toggleMode={toggleMode}
                errors={errors}
              />
            </div>

            {/* Support / Help (Optional) */}
            <p className="text-center text-xs sm:text-sm text-white/40">
              By continuing, you agree to our
              <span className="underline cursor-pointer hover:text-white mx-1">Terms</span>
              &
              <span className="underline cursor-pointer hover:text-white mx-1">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
