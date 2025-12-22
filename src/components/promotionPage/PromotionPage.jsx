import React from "react";
import BonusCard from "@/ui/BonusCard/BonusCard";
import { PROMOTIONS } from "./constant/constant";

export default function PromotionPage() {
    const promotions = PROMOTIONS;

    return (
        <div className="min-h-screen bg-[#0a1020] text-white font-poppins pb-20 pt-24 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DE9700] via-[#F6C768] to-[#DE9700] drop-shadow-sm">
                        Exclusive Promotions
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Grab the hottest deals and boost your gameplay with our limited-time
                    offers.
                </p>
            </div>

            {/* Grid Layout - Improved Responsiveness */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                    {promotions.map((promo) => (
                        <BonusCard
                            key={promo.id}
                            title={promo.title}
                            description={promo.description}
                            cta={promo.cta}
                            image={promo.image}
                            isFullWidth={true} // Enable responsive sizing for grid
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
