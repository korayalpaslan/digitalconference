import React from "react";
import NavigationBar from "./NavigationBar";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <header className="xl:min-h-[100vh] 2xl:min-h-[80vh] px-0 lg:px-6">
        <NavigationBar />
        <Hero />
      </header>
    </>
  );
};

export default Header;
