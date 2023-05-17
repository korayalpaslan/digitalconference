import React from "react";
import Image from 'next/image';

const Sponsors = () => {
  return (
    <div className="bg-background">
      <div className="lg:container md:mx-auto flex flex-col items-center pt-12">
        <div
          className="pt-24 pb-12 md:pt-36 relative w-full"
        >
          <h1 className="text-4xl lg:text-6xl font-light absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white">
            Sponsorlar
          </h1>
          <span
            className="circle-small2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          ></span>
        </div>

        <ul className="pt-5 pb-10 flex flex-wrap justify-center">
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor2.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor3.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor2.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor3.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor2.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor3.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor2.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-10 h-[100px] flex justify-center items-center">
            <Image src="/images/sponsor3.png" width={300} height={200} className="w-full" alt="Sponsor Logo"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
