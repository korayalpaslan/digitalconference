import React from "react";
import NavigationBar from "./NavigationBar";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <header className="min-h-[100vh]">
        <NavigationBar />
        <Hero />
      </header>
    </>
  );
};

export default Header;
