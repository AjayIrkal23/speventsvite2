import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";

import "react-html5video/dist/styles.css";
import Video from "../components/Video";

const events = [
  {
    name: "Ugadi Utsava",
    date: "19-March-2023",
    imgs: [
      "/music/ug/4.webp",
      "/music/ug/2.webp",
      "/music/ug/2.webp",
      "/music/ug/1.webp",
      "/music/ug/5.webp",
      "/music/ug/8.webp",
      "/music/ug/9.webp",
      "/music/ug/10.webp",
    ],
  },
  {
    name: "KLE School Annual Day ",
    date: "21-Dec-2019",
    imgs: [
      "/music/KLE/3.webp",
      "/music/KLE/2.webp",
      "/music/KLE/2.webp",
      "/music/KLE/5.webp",
      "/music/KLE/6.webp",
      "/music/KLE/7.webp",
      "/music/KLE/8.webp",
      "/music/KLE/10.webp",
      "/music/KLE/11.webp",
      "/music/KLE/12.webp",
      "/music/KLE/13.webp",
    ],
  },
  {
    name: "Udaya Utsava At JSS Dharward ",
    date: "10-July-2022",
    imgs: [
      "/music/ud/2.webp",
      "/music/ud/1.webp",
      "/music/ud/3.webp",
      "/music/ud/4.webp",
      "/music/ud/5.webp",
      "/music/ud/6.webp",
      "/music/ud/7.webp",
      "/music/ud/8.webp",
    ],
  },
  {
    name: "Holi Event Emiway Bantai ",
    date: "20-June-2019",
    imgs: [
      "/music/bb/2.webp",
      "/music/bb/1.webp",
      "/music/bb/3.webp",
      "/music/bb/4.webp",
    ],
  },
  {
    name: "Global Public School Annual Day  ",
    date: "4-Feb-2020",
    imgs: [
      "/music/global/13.webp",
      "/music/global/2.webp",
      "/music/global/3.webp",
      "/music/global/4.webp",
      "/music/global/5.webp",
      "/music/global/6.webp",
      "/music/global/7.webp",
      "/music/global/8.webp",
      "/music/global/10.webp",

      "/music/global/1.webp",

      "/music/global/15.webp",
      "/music/global/16.webp",
      "/music/global/17.webp",
      "/music/global/18.webp",
      "/music/global/19.webp",
      "/music/global/20.webp",
    ],
  },
  {
    name: "Shine Shetty Event",
    date: "26-Nov-2022",
    imgs: [
      "/music/SS/3.webp",
      "/music/SS/2.webp",
      "/music/SS/1.webp",
      "/music/SS/4.webp",
      "/music/SS/5.webp",
      "/music/SS/6.webp",
    ],
  },
];

const Political = () => {
  const [end, setEnd] = useState(false);
  console.log(end);
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

  return (
    <div>
      {" "}
      <div className="relative">
        <div className=" md:w-screen ">
          <Video
            url={"/videos/music.webp"}
            pUrl={"/videos/photos/music.webp"}
            sec={2900}
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
      <div className=" text-center  py-4 bg-[#ffa500] text-[28px]  font-[600] z-[99999]">
        <p>Music Events</p>
      </div>
      <div className="min-h-screen w-screen bg-[url('/bg1.webp')] sm:bg-cover bg-center  bg-no-repeat">
        <div>
          <p className=" font-monst font-[700] lg:text-[26px] md:text-[22px] sm:text-[19px] text-16px my-14 !mb-8 text-center capitalize ">
            Music Events Hosted By The SP Events
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

export { Political };
