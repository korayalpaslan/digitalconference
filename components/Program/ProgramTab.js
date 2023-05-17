import React, { useState } from "react";
import program from "./program-data";
import { motion } from "framer-motion";

const ProgramTab = () => {
  const [day, setDay] = useState(program);
  const [value, setValue] = useState(0);

  return (
    <div className="leading-8 text-white font-light w-full md:w-1/2 flex flex-col items-center md:items-start">
      <div className="flex mb-6 w-full">
        <div
          className={
            value === 0
              ? "px-12 pb-3 border-b-[2px] border-white text-center text-white"
              : "px-12 pb-3 border-b-[2px] border-gray-600 text-gray-600 text-opacity-50 border-opacity-50 text-center cursor-pointer"
          }
          onClick={() => setValue(0)}
        >
          <h1 className="font-bold text-lg">1.Gün</h1>
          <p className="font-light text-sm">11 Kasım</p>
        </div>
        <div
          className={
            value === 1
              ? "px-12 pb-3 border-b-[2px] border-white text-center text-white"
              : "px-12 pb-3 border-b-[2px] border-gray-600 text-gray-600 text-opacity-30 border-opacity-30 text-center cursor-pointer"
          }
          onClick={() => setValue(1)}
        >
          <h1 className="font-bold text-lg">2.Gün</h1>
          <p className="font-light text-sm">12 Kasım</p>
        </div>
      </div>
      <div className="w-full">
        {day[value].map((item, index) => {
          return (
            <motion.div
              className="py-2 flex min-w-100 justify-start "
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="mr-2 w-1/3 lg:w-1/5 ">
                {item.starts} - {item.ends}
              </div>
              <div className="w-2/3 lg:w-4/5 ">
                <h1>{item.topic}</h1>
                <p className="font-medium">{item.speaker}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramTab;
