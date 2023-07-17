import React from "react";
import Carousel from "better-react-carousel";
import { Typewriter } from "react-simple-typewriter";
import { Item } from "./Item";
import { ImagesHero } from "./ImagesHero";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { LatestEventsCard } from "./LatestEventsCard";
const Hero = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 640,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="relative">
        <Carousel
          arrowLeft={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-white/50 absolute z-[999] top-[50%]  cursor-pointer hover:text-white left-[5%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          }
          arrowRight={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-white/50 absolute z-[999] top-[50%]  cursor-pointer hover:text-white right-[5%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          }
          loop
          hideArrow={false}
          autoplay={5000}
        >
          <Carousel.Item className="!m-0">
            <div className=" md:w-screen ">
              <Video autoPlay className="md:h-[900px]">
                <source src="/videos/bg1.mp4" type="video/webm" />
              </Video>
            </div>
          </Carousel.Item>
          <Carousel.Item className="!m-0">
            <div className=" md:w-screen ">
              <Video autoPlay className="md:h-[900px]">
                <source src="/videos/bg2.mp4" type="video/webm" />
              </Video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" md:w-screen ">
              <Video autoPlay className="md:h-[900px]">
                <source src="/videos/bg3.mp4" type="video/webm" />
              </Video>
            </div>
          </Carousel.Item>

          {/* ... */}
        </Carousel>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 absolute bottom-0 right-[48%] -translate-x-[50%] text-white animate-bounce cursor-pointer hover:text-[gold] hover:scale-110 transition-all ease-in-out sm:inline-block hidden"
          onClick={() => goToTop()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="!font-monst text-center font-[400] italic text-sm  py-4 bg-[#ffa500]">
        <p>
          “Productivity is never an accident. It is always the result of a
          commitment to excellence, intelligent planning, and focused effort.”{" "}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-16 px-5 py-12">
        <div className="h-0.5 basis-[10%] md:basis-[25%]  bg-gray-300 " />
        <div className="flex items-center space-y-3 md:space-y-0 md:space-x-8 md:flex-row flex-col justify-center text-center ">
          <p className="md:text-[40px]  text-gray-800 italic font-monst font-[500]    sm:text-[24px]">
            Pioneers In
          </p>

          <div className="bg-red-500  font-monst px-4 py-6 md:py-8 font-semibold rounded-sm md:text-[26px] text-white sm:text-[14px] ">
            <Typewriter
              words={[
                "EVENT MANAGEMENT",
                "LIVE ENTERTAINMENT",
                "WEDDING EVENTS",
                "CORPORATE EVENTS",
                "SPORTS EVENTS",
              ]}
              loop={true}
            />
          </div>
        </div>
        <div className="h-0.5 basis-[10%] md:basis-[25%] bg-gray-300 " />
      </div>

      <ImagesHero />

      <div className="text-center mt-24 bg-[#ffa500]  py-6 ">
        <p className="uppercase font-monst font-[600] text-2xl ">
          Latest Events
        </p>
      </div>
      <section id="hero2" className="hero min-h-[500px] overflow-scroll">
        <div className=" ">
          <div className="flex flex-col md:flex-row w-[80%] gap-6 mx-auto h-[80%] justify-evenly items-center  pt-[3%]">
            <LatestEventsCard
              Img="/latest/1.webp"
              title="International Yoga Day"
              date="21-June-2023"
              city="Despande Skilling, Hubli"
            />

            <LatestEventsCard
              Img="/latest/2.webp"
              title="PM Narendra Modi Ji Event "
              date="5-May-2023"
              city="Bailhongal, Karnataka"
            />
            <LatestEventsCard
              Img="/latest/30.webp"
              title="Startup Gravity"
              date="3-Feb-2023"
              city="Despande Startups, Hubli"
            />
            <LatestEventsCard
              Img="/latest/4.webp"
              title="Ugadi Utsava"
              date="19-March-2023"
              city="Hubli, Karnataka"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Hero };
