import React, { useEffect } from "react";
import { EventCard } from "../components/EventCard";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Corporate = () => {
  useEffect(() => {
    const goToTop1 = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop1();
  }, []);
  const events = [
    {
      name: "Startup Gravity 2023",
      date: "3-Feb-2023",
      imgs: [
        "/corporate/startupgraveity/1.webp",
        "/corporate/startupgraveity/2.webp",

        "/corporate/startupgraveity/4.webp",

        "/corporate/startupgraveity/6.webp",
        "/corporate/startupgraveity/7.webp",

        "/corporate/startupgraveity/9.webp",
        "/corporate/startupgraveity/10.webp",
        "/corporate/startupgraveity/11.webp",
        "/corporate/startupgraveity/12.webp",
        "/corporate/startupgraveity/13.webp",
        "/corporate/startupgraveity/14.webp",
        "/corporate/startupgraveity/15.webp",
        "/corporate/startupgraveity/16.webp",
        "/corporate/startupgraveity/17.webp",
        "/corporate/startupgraveity/18.webp",
        "/corporate/startupgraveity/19.webp",
        "/corporate/startupgraveity/20.webp",
        "/corporate/startupgraveity/21.webp",
        "/corporate/startupgraveity/22.webp",
        "/corporate/startupgraveity/23.webp",
        "/corporate/startupgraveity/24.webp",
        "/corporate/startupgraveity/25.webp",
        "/corporate/startupgraveity/26.webp",
        "/corporate/startupgraveity/27.webp",

        "/corporate/startupgraveity/29.webp",
        "/corporate/startupgraveity/30.webp",
        "/corporate/startupgraveity/31.webp",
      ],
    },
    {
      name: "Tiecon",
      date: "4-March-2023",
      imgs: [
        "/corporate/ticon/4.webp",

        "/corporate/ticon/1.webp",
        "/corporate/ticon/5.webp",
        "/corporate/ticon/6.webp",
        "/corporate/ticon/7.webp",
        "/corporate/ticon/8.webp",
        "/corporate/ticon/9.webp",
      ],
    },
    {
      name: "Shri. Srimalu Event",
      date: "9-Dec-2022",
      imgs: [
        "/corporate/srimalu/11.webp",
        "/corporate/srimalu/4.webp",

        "/corporate/srimalu/6.webp",
        "/corporate/srimalu/7.webp",
        "/corporate/srimalu/8.webp",
        "/corporate/srimalu/9.webp",
        "/corporate/srimalu/10.webp",

        "/corporate/srimalu/12.webp",

        "/corporate/srimalu/14.webp",
        "/corporate/srimalu/15.webp",

        "/corporate/srimalu/17.webp",
        "/corporate/srimalu/18.webp",
      ],
    },
    {
      name: "Startup Dialog",
      date: "4-March-2023",
      imgs: [
        "/corporate/startup/17.webp",
        "/corporate/startup/15.webp",

        "/corporate/startup/7.webp",

        "/corporate/startup/14.webp",
        "/corporate/startup/1.webp",
        "/corporate/startup/16.webp",

        "/corporate/startup/18.webp",
        "/corporate/startup/19.webp",
        "/corporate/startup/20.webp",
        "/corporate/startup/21.webp",

        "/corporate/startup/24.webp",
        "/corporate/startup/25.webp",
        "/corporate/startup/26.webp",
        "/corporate/startup/27.webp",
        "/corporate/startup/28.webp",
      ],
    },
    {
      name: "Volvo Event",
      date: "19-Oct-2020",
      imgs: [
        "/corporate/volvo/2.webp",
        "/corporate/volvo/1.webp",
        "/corporate/volvo/3.webp",
        "/corporate/volvo/4.webp",
      ],
    },
    {
      name: "Family Carnival ",
      date: "7-Jan-2023",
      imgs: [
        "/corporate/carnival/1.webp",
        "/corporate/carnival/2.webp",
        "/corporate/carnival/3.webp",
      ],
    },
  ];

  const goToTop = () => {
    window.scrollTo({
      top: 640,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {" "}
      <div className="relative">
        <div className=" md:w-screen ">
          <Video autoPlay className="md:h-[900px]">
            <source src="/videos/corporate.mp4" type="video/webm" />
          </Video>
        </div>
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
      <div className=" text-center  py-4 bg-[#ffa500] text-[28px]  font-[600] ">
        <p>Corporate Events</p>
      </div>
      <div className="min-h-screen w-screen bg-[url('/bg2.webp')] sm:bg-cover bg-center  bg-no-repeat">
        <div>
          <p className=" font-monst font-[700] lg:text-[26px] md:text-[22px] sm:text-[19px] text-16px my-14 !mb-8 text-center capitalize ">
            Explore about our amazing services
          </p>
          <div className="flex max-w-[1200px] mx-auto md:px-0 px-[5%] gap-6 flex-wrap justify-center flex-col md:flex-row bg-[#ffa500]/10 py-8">
            {events.map((item) => (
              <EventCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Corporate };
