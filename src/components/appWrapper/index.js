"use client";

import React, { useState } from "react";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import SidebarMenu from "@/ui/SidebarMenu";
import BottomNav from "@/ui/BottomNav";
import { AuthProvider } from "@/contexts/AuthContext";

const AppWrapper = ({ children, modal }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <AuthProvider>
            <div className="flex h-screen bg-[#0C0630] overflow-hidden">
                {/* Sidebar */}
                <SidebarMenu
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                {/* Main Content */}
                <main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
                    {/* Header */}
                    <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

                    {/* Page Body */}
                    <div className="flex-1 px-3 sm:px-4 lg:px-6 space-y-8 pb-20 lg:pb-0">
                        {children}
                    </div>

                    {/* Footer */}
                    <Footer />
                </main>

                {/* Bottom Navigation - Mobile Only */}
                <BottomNav onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

                {/* Intercepted Modal */}
                {modal}
            </div>
        </AuthProvider>
    );
};

export default AppWrapper;
