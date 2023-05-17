import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const showInfoHandler = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <div className="question border-t-[1px] border-gray-500 ">
      <div className="flex py-6">
        <h4>{props.data.title}</h4>
        <button className={!showInfo ? "ml-auto rotate-180 transition duration-300 ease-in-out" : "ml-auto transition duration-300 ease-in-out"} onClick={showInfoHandler}>
         <IoIosArrowUp />
        </button>
      </div>
      <p className={!showInfo ? "text-white font-light max-h-[0px] overflow-hidden transition-all duration-300 ease-in-out" : "text-white font-light max-h-[500px] transition-all duration-300 ease-in-out pb-6"}>{props.data.info}</p>
    </div>
  );
};

export default Question;
