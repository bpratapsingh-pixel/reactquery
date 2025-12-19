"use client";

import { Menu, Search, Home, ShoppingBag, Gift } from "lucide-react";

export default function BottomNav({ onToggleSidebar }) {
    return (
        <nav
            className="
        lg:hidden
        fixed bottom-0 left-0 right-0
        bg-[#18083D]
        border-t-2 border-[#1794E7]
        shadow-[0_-0.125rem_0.5rem_rgba(23,148,231,0.3)]
        z-50
        pb-safe
      "
        >
            <div className="flex items-center justify-around px-2 py-3">
                {/* Menu Toggle */}
                <NavItem
                    icon={<Menu size={22} />}
                    label="Menu"
                    onClick={onToggleSidebar}
                />

                {/* Search */}
                <NavItem
                    icon={<Search size={22} />}
                    label="Search"
                />

                {/* Home - Highlighted */}
                <NavItem
                    icon={<Home size={24} />}
                    label="Home"
                    isActive
                />

                {/* Buy */}
                <NavItem
                    icon={<ShoppingBag size={22} />}
                    label="Buy"
                />

                {/* Redeem */}
                <NavItem
                    icon={<Gift size={22} />}
                    label="Redeem"
                />
            </div>
        </nav>
    );
}

/* ---------- Nav Item ---------- */

function NavItem({ icon, label, onClick, isActive = false }) {
    return (
        <button
            onClick={onClick}
            className={`
        flex flex-col items-center justify-center
        min-w-[3.5rem] gap-1
        transition-all active:scale-95
        ${isActive
                    ? 'text-[#FFC522]'
                    : 'text-white/70 hover:text-white'
                }
      `}
        >
            <div className={`
        ${isActive ? 'scale-110' : ''}
        transition-transform
      `}>
                {icon}
            </div>
            <span className={`
        text-[0.65rem] font-medium
        ${isActive ? 'font-bold' : ''}
      `}>
                {label}
            </span>
        </button>
    );
}
