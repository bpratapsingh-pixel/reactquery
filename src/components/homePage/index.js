"use client";

import React from "react";

import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import Banner from "./Banner";
import LiveWinner from "./LiveWinner";
import GameList from "./GameList";
import SearchBar from "./SearchBar";
import Original from "./Original";
import Slots from "./Slots";
import LiveCasino from "./Livecasino";
import NewGames from "./NewGames";
import Bonus from "./Bonus";
import TablesGame from "./TablesGame";
import FishGames from "./FishGames";
import Providers from "./Providers";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-[#0C0630] overflow-hidden">

      {/* Sidebar */}
      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">

        {/* Header */}
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Page Body */}
        <div className="flex-1 px-3 sm:px-4 lg:px-6 space-y-8 pb-20 lg:pb-0">

          {/* Hero / Banner */}
          <Banner />

          {/* Live Winners */}
          <LiveWinner />

          {/* Game list + Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="flex-1 min-w-0">
              <GameList />
            </div>

            <div className="w-full sm:w-auto sm:shrink-0">
              <SearchBar />
            </div>
          </div>

          {/* Sections */}
          <Original />
          <Slots />
          <LiveCasino />
          <NewGames />
          <Bonus />
          <TablesGame />
          <FishGames />
          <Providers />

        </div>

        {/* Footer */}
        <Footer />
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
    </div>
  );
};

export default Home;
