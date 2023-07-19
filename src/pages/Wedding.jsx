import React, { useEffect } from "react";
import { EventCard } from "../components/EventCard";

import "react-html5video/dist/styles.css";
import Video from "../components/Video";

const Wedding = () => {
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
      name: "Akshay & Anusha Wedding",
      date: "7-June-2023",
      imgs: [
        "/wedding/akshayanu/2.webp",
        "/wedding/akshayanu/24.webp",
        "/wedding/akshayanu/13.webp",

        "/wedding/akshayanu/3.webp",
        "/wedding/akshayanu/4.webp",
        "/wedding/akshayanu/5.webp",
        "/wedding/akshayanu/6.webp",
        "/wedding/akshayanu/7.webp",
        "/wedding/akshayanu/8.webp",
        "/wedding/akshayanu/10.webp",
        "/wedding/akshayanu/11.webp",
        "/wedding/akshayanu/12.webp",
        "/wedding/akshayanu/1.webp",
        "/wedding/akshayanu/14.webp",
        "/wedding/akshayanu/15.webp",
        "/wedding/akshayanu/16.webp",
        "/wedding/akshayanu/17.webp",
        "/wedding/akshayanu/18.webp",
        "/wedding/akshayanu/19.webp",
        "/wedding/akshayanu/20.webp",
        "/wedding/akshayanu/21.webp",
        "/wedding/akshayanu/23.webp",
        "/wedding/akshayanu/24.webp",
      ],
    },
    {
      name: "Hiremath Wedding",
      date: "21-Dec-2019",
      imgs: [
        "/wedding/hire/5.webp",
        "/wedding/hire/1.webp",
        "/wedding/hire/2.webp",
        "/wedding/hire/3.webp",
        "/wedding/hire/4.webp",

        "/wedding/hire/6.webp",
      ],
    },
    {
      name: "Katwe & Ladwa Wedding",
      date: "16-Feb-2023",
      imgs: ["/wedding/katweladwa/1.webp", "/wedding/katweladwa/2.webp"],
    },
    {
      name: "Anvita & Suraj Wedding ",
      date: "11-Feb-2023",
      imgs: [
        "/wedding/anvitasuraj/7.webp",
        "/wedding/anvitasuraj/2.webp",
        "/wedding/anvitasuraj/3.webp",
        "/wedding/anvitasuraj/4.webp",
        "/wedding/anvitasuraj/5.webp",
        "/wedding/anvitasuraj/1.webp",

        "/wedding/anvitasuraj/9.webp",
        "/wedding/anvitasuraj/10.webp",
      ],
    },
    {
      name: "Rohan & Sagarika Reception",
      date: "17-Feb-2023",
      imgs: [
        "/wedding/rohanrecp/5.webp",
        "/wedding/rohanrecp/1.webp",
        "/wedding/rohanrecp/2.webp",
        "/wedding/rohanrecp/2.webp",
        "/wedding/rohanrecp/4.webp",
      ],
    },
    {
      name: "Nikita & Akshay Wedding",
      date: "21-Feb-2022",
      imgs: [
        "/wedding/nikiwed/1.webp",
        "/wedding/nikiwed/2.webp",
        "/wedding/nikiwed/3.webp",
        "/wedding/nikiwed/4.webp",
      ],
    },
    {
      name: "Patil Wedding Ceremony",
      date: "3-Dec-2022",
      imgs: [
        "/wedding/patil/4.webp",
        "/wedding/patil/1.webp",
        "/wedding/patil/2.webp",
        "/wedding/patil/3.webp",
      ],
    },
    {
      name: "Raikar Wedding Ceremony",
      date: "11-Dec-2022",
      imgs: ["/wedding/r/1.webp"],
    },
    {
      name: "Naveen & Aishwarya Wedding",
      date: "3-Dec-2022",
      imgs: ["/wedding/bvnasih/2.webp", "/wedding/bvnasih/1.webp"],
    },
  ];
  return (
    <div>
      {" "}
      <div className="relative">
        <div className=" md:w-screen ">
          <Video
            url={"/videos/w.webp"}
            pUrl={"/videos/photos/w.webp"}
            sec={5500}
          />
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
        <p>Wedding Events</p>
      </div>
      <div className="min-h-screen w-screen bg-[url('/bg2.webp')] sm:bg-cover bg-center  bg-no-repeat">
        <div>
          <p className=" font-monst font-[700] lg:text-[26px] md:text-[22px] sm:text-[19px] text-16px my-14 !mb-8 text-center capitalize ">
            Casual Weddings? No. We Create Magical Moments
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

export { Wedding };
