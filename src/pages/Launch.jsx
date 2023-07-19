import { useEffect } from "react";
import { EventCard } from "../components/EventCard";
import "react-html5video/dist/styles.css";
import Video from "../components/Video";

const events = [
  {
    name: "Jewellery Exhibition",
    date: "24-March-2023",
    imgs: ["/launch/j/1.webp", "/launch/j/2.webp"],
  },
  {
    name: "Toyata Launch Hillix",
    date: "21-Dec-2019",
    imgs: [
      "/launch/t/4.webp",
      "/launch/t/3.webp",
      "/launch/t/5.webp",
      "/launch/t/6.webp",
      "/launch/t/7.webp",
      "/launch/t/8.webp",
    ],
  },
  {
    name: "Dehydration Machine",
    date: "21-Dec-2019",
    imgs: ["/launch/d/1.webp", "/launch/d/2.webp"],
  },
];

const Launch = () => {
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
            url={"/videos/l.webp"}
            pUrl={"/videos/photos/l.webp"}
            sec={3200}
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
        <p>Launch Events</p>
      </div>
      <div className="min-h-screen w-screen bg-[url('/bg2.webp')] sm:bg-cover bg-center  bg-no-repeat">
        <div>
          <p className=" font-monst font-[700] lg:text-[26px] md:text-[22px] sm:text-[19px] text-16px my-14 !mb-8 text-center capitalize ">
            Launch Events Hosted By The SP Events
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

export { Launch };
