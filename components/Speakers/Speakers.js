import React from "react";
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Speakers = () => {
  return (
    <div className="bg-background h-[100vh] w-full lg:container md:mx-auto pt-24 px-6 lg:px-0 max-h-[75vh] lg:max-h-[80vh]">
      <div className="pt-24 md:pt-36 relative w-full">
        <h1 className="text-4xl lg:text-6xl font-light absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-10 text-white">
          İlham Veren Konuşmalar
        </h1>
        <span
          className="circle-small absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              md:left-0 md:-translate-x-0"
        ></span>
      </div>
      <div className="pb-12">
        <p className="text-sm leading-8 md:text-lg font-light text-center md:text-start text-white mb-6 w-full lg:w-1/2">
          Yılın son zirve toplantısında teknoloji profesyonelleri ve lider
          girişimcilerle güncel dijital trend ve teknolojileri keşfedeceksiniz
        </p>
      </div>
      <Splide
        hasTrack={false}
        options={{
          rewind: true,
          type: 'carousel',
          fixedWidth: "375px",
          fixedHeight: "637px",
          gap: "1rem",
          perMove: 1,
          perPage: 3,
          focus: 'number',
          padding: { right: "6rem" },
          breakpoints: {
            768: {
              perPage: 1,
              fixedWidth: "250px",
              fixedHeight: "425px",
              padding: { right: "2rem" },
            },
            992: {
              perPage: 2,
              fixedWidth: "300px",
              fixedHeight: "510px",
              padding: { right: "3rem" },
            },
          },
        }}
      >
        <div className="custom-wrapper bg-transparent">
          <SplideTrack>
            <SplideSlide className="flex flex-col bg-background rounded-lg">
              <Image
                src="/images/1.jpeg"
                alt="Image 1"
                className="h-3/5 object-cover object-top rounded-t-lg"
                width={500}
                height={800}
              />
              <div className="h-2/5 flex flex-col p-6">
                <div className="mb-5">
                  <h1 className="text-white text-xl">Ali Veli</h1>
                  <p className="text-sm  md:text-lg font-light text-white">
                    Co-Founder
                  </p>
                </div>
                <div className="text-sm  md:text-lg font-light text-white">
                  Bilişimde Güvenlik Kaynakları
                </div>
              </div>
            </SplideSlide>

            <SplideSlide className="flex flex-col bg-background rounded-lg">
              <Image
                src="/images/2.jpeg"
                alt="Image 1"
                className="h-3/5 object-cover object-top rounded-t-lg"
                width={500}
                height={800}
              />
              <div className="h-2/5 flex flex-col p-6">
                <div className="mb-5">
                  <h1 className="text-white text-xl">Selin Aksu</h1>
                  <p className="text-sm  md:text-lg font-light text-white">
                    Marketing Manager
                  </p>
                </div>
                <div className="text-sm  md:text-lg font-light text-white">
                  Yeni Nesil Siber Suçlar
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="flex flex-col bg-background rounded-lg">
              <Image
                src="/images/4.jpeg"
                alt="Image 1"
                className="h-3/5 object-cover object-top rounded-t-lg"
                width={500}
                height={800}
              />
              <div className="h-2/5 flex flex-col p-6">
                <div className="mb-5">
                  <h1 className="text-white text-xl">Mehmel Ali Özdoğanlar</h1>
                  <p className="text-sm  md:text-lg font-light text-white">
                    Satış Direktörü
                  </p>
                </div>
                <div className="text-sm  md:text-lg font-light text-white">
                  2024 Hedefleri
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="flex flex-col bg-background rounded-lg">
              <Image
                src="/images/5.jpeg"
                alt="Image 1"
                className="h-3/5 object-cover object-top rounded-t-lg"
                width={500}
                height={800}
              />
              <div className="h-2/5 flex flex-col p-6">
                <div className="mb-5">
                  <h1 className="text-white text-xl">Barış Başpınar</h1>
                  <p className="text-sm  md:text-lg font-light text-white">
                    Satış Direktörü
                  </p>
                </div>
                <div className="text-sm  md:text-lg font-light text-white">
                  Chat-GPT ile Hayatımıza Giren Yenilikler
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="flex flex-col bg-background rounded-lg">
              <Image
                src="/images/6.jpeg"
                alt="Image 1"
                className="h-3/5 object-cover object-top rounded-t-lg"
                width={500}
                height={800}
              />
              <div className="h-2/5 flex flex-col p-6">
                <div className="mb-5">
                  <h1 className="text-white text-xl">Tuğçe Batmaz Gönülalan</h1>
                  <p className="text-sm  md:text-lg font-light text-white">
                    CEO
                  </p>
                </div>
                <div className="text-sm  md:text-lg font-light text-white">
                  Teknolojide Önümüzdeki 10 Yılın Trendleri
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows" />
          <ul className="splide__pagination translate-y-[5vh]"/>
        </div>
      </Splide>
    </div>
  );
};

export default Speakers;
