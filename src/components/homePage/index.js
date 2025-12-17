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

const Home = () => {
  return (
    <div className="flex min-h-screen bg-[#0C0630] overflow-x-hidden">

      {/* Sidebar – desktop only */}
      <aside className="hidden lg:block w-[340px] shrink-0">
        <SidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <Header />

        {/* Page Body */}
        <div className="flex-1 px-3 sm:px-4 lg:px-6 space-y-8">

          {/* Hero / Banner */}
          <Banner />

          {/* Live Winners */}
          <LiveWinner />

          {/* Game list + Search */}
          <div
            className="
              flex flex-col gap-3
              sm:flex-row sm:items-center
              sm:gap-4
            "
          >
            <div className="flex-1 min-w-0">
              <GameList />
            </div>

            <div className="w-full sm:w-[280px]">
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
    </div>
  );
};

export default Home;
