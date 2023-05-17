import React from "react";
import ProgramTab from './ProgramTab';

const Program = () => {
  return <div className="min-h-[100vh] bg-primary pb-36">
      <div className="text-white pt-[325px] md:pt-[410px] lg:pt-[487px]">
        <div className="lg:container md:mx-auto py-0 px-6 md:px-12 lg:px-0 flex flex-col md:flex-row md:justify-between items-start">
          <div
            className="py-24 md:py-36 relative w-full md:w-2/5"
          >
            <h1 className="text-4xl lg:text-6xl font-light absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-10">
              Program
            </h1>
            <span
              className="circle-small absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              md:left-0 md:-translate-x-0"
            ></span>
          </div>
          <ProgramTab/>

        </div>
      </div>
  </div>;
};

export default Program;
