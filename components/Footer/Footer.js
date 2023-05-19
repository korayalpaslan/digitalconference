import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-background text-white lg:container md:mx-auto px-6 pt-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b-[1px] border-border pb-6 md:pb-0">
        <div className="w-full mb-10">
          <div className="flex items-center mb-5">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="w-[40px]"
            />
            <h1 className="text-2xl ml-2">Digital Summit</h1>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">Adres</h1>
            <p className="font-light">Feneryolu Mahallesi No:34, Kadıköy</p>
          </div>
          <div>
            <h1 className="font-bold">İletişim</h1>
            <p className="font-light">info@digitalsubmit2023.com</p>
          </div>
        </div>
        <div>
          <ul className="mb-10 text-left md:text-right">
            <li className="font-light mb-3 hover:text-primary transition-all duration-300 cursor-pointer lg:text-sm">
              Konuşmacılar
            </li>
            <li className="font-light mb-3 hover:text-primary transition-all duration-300 cursor-pointer lg:text-sm">
              Program
            </li>
            <li className="font-light hover:text-primary transition-all duration-300 cursor-pointer lg:text-sm">
              İletişim
            </li>
          </ul>
          <ul className="flex">
            <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
              <FaLinkedin />
            </li>
            <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
              <FaTwitter />
            </li>
            <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="text-lg hover:text-primary transition-all duration-300 cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 md:py-12 flex flex-col md:flex-row justify-between items-start">
        <ul className="mb-10 text-left md:text-left md:order-2 md:flex lg:text-sm">
          <li className="font-light mb-3 underline md:mr-2 lg:text-sm">Gizlilik Politikası</li>
          <li className="font-light mb-3 underline md:mr-2 lg:text-sm">Hizmet Koşulları</li>
          <li className="font-light mb-3 underline">Çerez Politikası</li>
        </ul>
        <p className="font-light lg:text-sm">
          &#169; Dijital Summit 2023. Tüm hakları saklıdır
        </p>
      </div>
    </div>
  );
};

export default Footer;
