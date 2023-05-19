import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const Faq = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="bg-transparent text-white px:0 lg:px-6">
      <div className="lg:container md:mx-auto py-0 px-6 md:px-12 lg:px-0 flex flex-col md:flex-row md:justify-between items-center md:items-start">
        <div className="w-full md:w-1/2">
          <div className="py-24 md:py-36 relative ">
            <h1 className="text-4xl lg:text-5xl font-light absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-10 text-center">
              Sık Sorulanlar
            </h1>
            <span
              className="circle-small2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              md:left-0 md:-translate-x-0"
            ></span>
          </div>
          <p className="lg:-translate-y-1/2 leading-8 text-white font-light text-center md:text-left w-full md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            exercitationem repellendus aliquam quibusdam id eum veritatis
            quisquam a libero recusandae veniam eos et, ut architecto numquam
            modi voluptatum dolor saepe!
          </p>
        </div>

        <div className="w-full md:w-1/2 py-12 md:py-24 ">
          {questions.map((question) => (
            <SingleQuestion key={question.id} data={question}></SingleQuestion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
