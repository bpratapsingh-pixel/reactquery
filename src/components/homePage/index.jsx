"use client";

import React from "react";
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
