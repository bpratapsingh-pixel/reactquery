"use client";

import React from "react";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import Banner from "./Banner";
import Bonus from "./Bonus";
import FishGames from "./FishGames";
import Footer from "./Footer";
import GameList from "./GameList";
import LiveCasino from "./Livecasino";
import LiveWinner from "./LiveWinner";
import NewGames from "./NewGames";
import Original from "./Original";
import Providers from "./Providers";
import SearchBar from "./SearchBar";
import Slots from "./Slots";
import TablesGame from "./TablesGame";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-[#0C0630]">

      Sidebar (hidden on mobile)
      <aside className="hidden lg:block w-[340px] shrink-0">
        <SidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-x-hidden">

        Header
        <Header />

        {/* Page Content */}
        <div className="px-4 lg:px-6 space-y-8">

          <Banner />
          <LiveWinner />

          <div
      className="flex items-center gap-1.25rem
      px-1.5rem mt-1.5rem"
    ><div className="flex-1 min-w-0">
            <GameList />
             </div>
             
            <SearchBar />
          </div>

          <Original />
          <Slots />
          <LiveCasino />
          <NewGames />
          <Bonus />
          <TablesGame />
          <FishGames />
          <Providers />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
