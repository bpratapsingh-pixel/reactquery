"use client";

import { Controller } from "react-hook-form";

const UserForm = ({
  controls,
  control,
  handleSubmit,
  onSubmit,
  isSignUp,
  toggleMode,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {controls.map((item) => (
          <div key={item.name} className="group space-y-1.5 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-semibold text-white/70 group-focus-within:text-[#FFC522] transition-colors uppercase tracking-wider">
              {item.label}
            </label>
            <Controller
              name={item.name}
              control={control}
              rules={{
                required: item.required,
                pattern: item.pattern,
              }}
              render={({ field }) => (
                <div className="relative group/input">
                  <input
                    {...field}
                    type={item.name === "password" ? "password" : "text"}
                    placeholder={item.placeholder}
                    className={`
                      w-full rounded-2xl bg-[#0C1F58]/50 border-2 
                      ${errors[item.name] ? "border-red-500/50" : "border-white/10 group-focus-within:border-[#FFC522]/50"} 
                      px-4 py-3 sm:py-3.5 text-sm sm:text-base outline-none 
                      transition-all duration-300 backdrop-blur-md
                      focus:bg-[#0C1F58] focus:ring-4 focus:ring-[#FFC522]/10
                      placeholder:text-white/20 text-white
                    `}
                  />
                  {/* Subtle input glow */}
                  <div className="absolute inset-0 -z-10 bg-[#FFC522]/0 group-focus-within/input:bg-[#FFC522]/5 blur-xl transition-all duration-300 rounded-2xl" />
                </div>
              )}
            />
            {errors[item.name] && (
              <p className="text-red-400 text-[10px] sm:text-xs font-medium animate-in fade-in slide-in-from-top-1 px-1">
                {errors[item.name].message}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-5">
        <button
          type="submit"
          className="
            relative w-full group overflow-hidden
            rounded-2xl bg-gradient-to-r from-[#5A2CC2] to-[#1794E7] 
            py-3.5 sm:py-4 text-sm sm:text-base font-bold tracking-widest uppercase
            transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
            shadow-[0_10px_30px_rgba(23,148,231,0.3)]
          "
        >
          <span className="relative z-10">{isSignUp ? "Sign Up" : "Sign In"}</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>

        {/* Switch Mode */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-white/50 mb-0.5">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            type="button"
            onClick={toggleMode}
            className="text-xs sm:text-sm font-bold text-[#FFC522] hover:text-[#FFD700] underline-offset-4 hover:underline transition-all"
          >
            {isSignUp ? "Log In Instead" : "Create New Account"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
