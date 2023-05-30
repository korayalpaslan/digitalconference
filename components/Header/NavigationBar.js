import React from "react";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <div className="text-white lg:container lg:mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-0">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={400}
          height={400}
          className="w-[40px]"
        />
        <h1 className="text-2xl ml-2">Digital Summit</h1>
      </div>
      <div className="hamburger mt-2 lg:hidden">
        <span className="bg-white"></span>
        <span className="bg-white"></span>
        <span className="bg-white"></span>
      </div>
      <ul className="menu hidden lg:flex justify-around items-center font-light space-x-10 mt-2">
        <li>
          <button className="cursor hover:text-primary transition-colors duration-300">Ana Sayfa</button>
        </li>
        <li>
          <button className="cursor hover:text-primary transition-colors duration-300">Konuşmacılar</button>
        </li>
        <li>
          <button className="cursor hover:text-primary transition-colors duration-300">Ajanda</button>
        </li>
        <li>
          <button className="cursor hover:text-primary transition-colors duration-300">İletişim</button>
        </li>
        <li>
          <button className="bg-primary hover:bg-primary_dark transition-all duration-300 rounded-full py-3 px-6 min-w-[125px]">Kayıt</button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
