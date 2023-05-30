import React from "react";
import NavigationBar from "./NavigationBar";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <header className="h-auto min-h-[100vh] px-0 lg:px-6 flex flex-col">
        <NavigationBar />
        <Hero />
      </header>
    </>
  );
};

export default Header;
