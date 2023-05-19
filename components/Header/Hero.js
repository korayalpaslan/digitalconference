import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[80vh] h-auto lg:container md:mx-auto">
      <span className="circle"></span>
      <div className="h-full flex flex-col lg:flex-row items-center lg:translate-y-20">
        <div className="px-8 pb-8 lg:px-0 text-center lg:text-left mt-8 lg:mt-0">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
            }}
            className="bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] rounded-full py-1 px-2 font-light text-sm tracking-widest"
          >
            11/11/2023 - 12/11/2023
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              delay: 0.35,
              duration: 0.5,
            }}
            className="my-5 xl:my-8 text-4xl xl:text-6xl text-white lg:w-2/3"
          >
            Dijital Teknolojiler Zirvesi 2023
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              delay: 0.45,
              duration: 0.5,
            }}
            className="mb-5 xl:mb-8 leading-8 text-white font-light lg:w-2/3"
          >
            Yılın son zirve toplantısında teknoloji profesyonelleri ve lider
            girişimcilerle güncel dijital trend ve teknolojileri keşfedeceksiniz
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              delay: 0.55,
              duration: 0.5,
            }}
            className="flex space-x-5 justify-center lg:justify-start"
          >
            <button className="bg-primary hover:bg-primary_dark transition-all duration-300 rounded-full 
            py-3 px-6 text-white min-w-[125px] cursor font-light">
              Kayıt
            </button>
            <button className="bg-transparent border hover:bg-white hover:text-background transition-all duration-300 rounded-full py-3 px-6 min-w-[125px] text-white cursor font-light">
              Ajanda
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
          }}
          className="p-8 lg:px-0 max-w-[350px] mx-auto lg:ml-auto"
        >
          <Image
            src="/images/speaker.jpg"
            width={800}
            height={1000}
            className="rounded-xl object-left-top"
            alt="Speaker Logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
