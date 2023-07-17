import React, { useEffect } from "react";
import { EventCard } from "../components/EventCard";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Special = () => {
  useEffect(() => {
    const goToTop1 = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop1();
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 640,
      behavior: "smooth",
    });
  };

  const events = [
    {
      name: "PM Narendra Modi Event",
      date: "5-May-2023",
      imgs: [
        "/special/Pm modi/13.webp",
        "/special/Pm modi/1.webp",

        "/special/Pm modi/7.webp",
        "/special/Pm modi/8.webp",
        "/special/Pm modi/9.webp",

        "/special/Pm modi/11.webp",

        "/special/Pm modi/14.webp",
      ],
    },
    {
      name: "Luxury Wedding",
      date: "13-Dec-2022",
      imgs: [
        "/special/lw/5.webp",
        "/special/lw/3.webp",
        "/special/lw/2.webp",
        "/special/lw/1.webp",
        "/special/lw/4.webp",
        "/special/lw/6.webp",
        "/special/lw/7.webp",
        "/special/lw/8.webp",
      ],
    },
    {
      name: "Evening with Legends Infosys",
      date: "4-Feb-2023",
      imgs: [
        "/special/infos/12.webp",
        "/special/infos/10.webp",
        "/special/infos/3.webp",
        "/special/infos/2.webp",
        "/special/infos/1.webp",

        "/special/infos/8.webp",
      ],
    },
    {
      name: "Launch Of PM-Mitra Park",
      date: "20-June-2019",
      imgs: ["/special/mintra/1.webp", "/special/mintra/2.webp"],
    },
    {
      name: "Launch Event of Toyata Hillix",
      date: "4-Feb-2020",
      imgs: [
        "/special/toyata/2.webp",
        "/special/toyata/3.webp",

        "/special/toyata/1.webp",
        "/special/toyata/4.webp",
        "/special/toyata/6.webp",
        "/special/toyata/5.webp",
      ],
    },
    {
      name: "Putani Prapancha",
      date: "26-Nov-2022",
      imgs: [
        "/special/putani/1.webp",
        "/special/putani/3.webp",
        "/special/putani/2.webp",
        "/special/putani/1.webp",
        "/special/putani/4.webp",
        "/special/putani/6.webp",
        "/special/putani/7.webp",
        "/special/putani/5.webp",
      ],
    },
  ];
  return (
    <div>
      {" "}
      <div className="relative">
        <div className=" md:w-screen ">
          <Video autoPlay className="md:h-[900px]">
            <source src="/videos/special.mp4" type="video/webm" />
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
        <p>Special Events</p>
      </div>
      <div className="min-h-screen w-screen bg-[url('/bg1.webp')] sm:bg-cover bg-center  bg-no-repeat">
        <div>
          <p className=" font-monst font-[700] lg:text-[26px] md:text-[22px] sm:text-[19px] text-16px my-14 !mb-8 text-center capitalize ">
            Whats so Special? Have a look yourself
          </p>
          <div className="flex max-w-[1200px] mx-auto md:px-0 px-[5%] gap-6 flex-wrap justify-center flex-col md:flex-row bg-red-500/10 py-8">
            {events.map((item) => (
              <EventCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Special };
