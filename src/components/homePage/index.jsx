"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Banner from "./Banner";
import LiveWinner from "./LiveWinner";
import GameList from "./GameList";
import SearchBar from "./SearchBar";

// Lazy load components below the fold
const Original = dynamic(() => import("./Original"), { ssr: true });
const Slots = dynamic(() => import("./Slots"), { ssr: true });
const LiveCasino = dynamic(() => import("./Livecasino"), { ssr: true });
const NewGames = dynamic(() => import("./NewGames"), { ssr: true });
const Bonus = dynamic(() => import("./Bonus"), { ssr: true });
const TablesGame = dynamic(() => import("./TablesGame"), { ssr: true });
const FishGames = dynamic(() => import("./FishGames"), { ssr: true });
const Providers = dynamic(() => import("./Providers"), { ssr: true });

const Home = () => {
  return (
    <>
      {/* Hero / Banner */}
      <Banner />

      {/* Live Winners */}
      <LiveWinner />

      {/* Game list + Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center max-w-[90rem] mx-auto px-[1.3rem] w-full">
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
    </>
  );
};

export default Home;
