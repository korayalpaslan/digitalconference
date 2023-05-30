import React from "react";
import Arrow from "./Arrow";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Arrow />
      <div className="bg-primary text-white">
        <div className="lg:container md:mx-auto py-0 px-6 md:px-12 flex flex-col md:flex-row md:justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "500px 0px 0px 0px" }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="py-24 md:py-36 relative w-full md:w-1/2"
          >
            <h1 className="text-4xl lg:text-5xl font-light absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-10">
              Hakkımızda
            </h1>
            <span
              className="circle-small absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              md:left-0 md:-translate-x-0"
            ></span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "500px 0px 0px 0px" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="leading-8 text-white font-light text-center md:text-left w-full md:w-1/2"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consequatur nostrum, velit, deleniti doloribus placeat cupiditate ab
            odio repudiandae accusantium nam at expedita dolores ex. Praesentium
            possimus libero ullam voluptatum rem quo, rerum officiis eligendi
            quas a odio, molestias fugit hic cumque dolore eaque adipisci
            recusandae sunt obcaecati unde dignissimos.
          </motion.div>
        </div>
        <div className="lg:container md:mx-auto pt-20 px-6 md:px-12 h-[300px] md:h-[450px] lg:h-[600px]">
          <Image
            src="/images/venue.jpg"
            width={1800}
            height={1000}
            className="h-full object-cover rounded-t-2xl"
            alt="Venue Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
