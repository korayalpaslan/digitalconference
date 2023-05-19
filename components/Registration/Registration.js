import React from "react";
import Image from "next/image";

const Registration = () => {
  return (
    <div className="h-auto px-6">
      <div className="flex flex-col lg:container md:mx-auto py-0 px-0 lg:px-0 h-full border rounded-3xl border-border border-b-0">
        <div className="flex flex-col md:flex-row md:justify-between lg:px-12">
          <div className="flex flex-col items-center py-12 px-2 md:px-6 md:w-1/2 md:items-start md:justify-center">
            <button className="bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] rounded-full py-1 px-6 font-light text-sm mb-6">
              DTZ 2023
            </button>
            <h1 className="text-white font-light text-4xl mb-6 text-center md:text-start lg:text-5xl">
              Erken Kayıt Fırsatları
            </h1>
            <p className="text-sm leading-8 md:text-lg font-light text-center md:text-start text-white mb-6">
              Yılın son zirve toplantısında teknoloji profesyonelleri ve lider
              girişimcilerle güncel dijital trend ve teknolojileri
              keşfedeceksiniz
            </p>
            <button className="bg-primary hover:bg-primary_dark transition-all duration-300 rounded-full py-3 px-6 text-white min-w-[125px] cursor font-light">
              Kayıt
            </button>
          </div>
            <div className="p-8 lg:px-0 max-w-[300px] mx-auto md:mx-0">
              <Image
                src="/images/speaker.jpg"
                width={800}
                height={1000}
                className="rounded-xl object-left-top"
                alt="Speaker Image"
              />
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] h-[30px] mt-auto border-b rounded-b-3xl border-border"></div>
      </div>
    </div>
  );
};

export default Registration;
