import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="h-auto px-6 bg-background">
      <div className="flex flex-col lg:container md:mx-auto py-0 px-0 lg:px-0 h-full border rounded-3xl border-border border-b-0">
        <div className="flex flex-col md:flex-row md:justify-between lg:px-12 lg:items-center">
          <div className="flex flex-col items-center py-12 px-2 md:px-6 md:w-1/2 md:items-start md:justify-center">
            <h1 className="text-white font-light text-2xl mb-6 text-center md:text-start md:text-4xl lg:text-5xl">
              Newsletter
            </h1>
            <p className="font-light text-center md:text-start text-white mb-6 leading-8">
              Yıl boyunca gerçekleştireceğimiz etkinliklerden haberdar olmak
              için düzenli olarak her ay ilettiğimiz bültenimize abone
              olabilirsiniz.
            </p>
          </div>
          <div className="p-8 lg:px-0 mx-auto md:mx-0 lg:flex lg:justify-end lg:w-1/2">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="mt-1 block w-full px-3 py-4 border border-border bg-background rounded-md text-sm shadow-sm min-w-[250px] placeholder-gray-400 font-light text-gray-400 mr-0 lg:mr-5 mb-5 lg:mb-0 lg:w-3/5"/>
            <button className="bg-primary hover:bg-primary_dark transition-all duration-300 rounded-full 
            py-3 px-6 text-white min-w-[125px] w-full lg:w-auto cursor font-light">
              Abone Ol
            </button>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] h-[30px] mt-auto border-b rounded-b-3xl border-border"></div>
      </div>
    </div>
  );
};

export default Newsletter;
