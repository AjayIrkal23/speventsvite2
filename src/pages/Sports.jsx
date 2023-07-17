import { useEffect } from "react";
import { EventCard } from "../components/EventCard";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const events = [
  {
    name: "National Level Kabaddi Utsava",
    date: "24-March-2023",
    imgs: [
      "/sports/kabadi/1.webp",
      "/sports/kabadi/2.webp",
      "/sports/kabadi/3.webp",
      "/sports/kabadi/4.webp",
      "/sports/kabadi/5.webp",
      "/sports/kabadi/7.webp",
      "/sports/kabadi/8.webp",
    ],
  },
  {
    name: "International Yoga Day Event ",
    date: "21-Dec-2019",
    imgs: [
      "/sports/yogae/1.webp",
      "/sports/yogae/2.webp",
      "/sports/yogae/3.webp",
      "/sports/yogae/4.webp",
      "/sports/yogae/5.webp",
      "/sports/yogae/6.webp",
    ],
  },
];

const Sports = () => {
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
          <Video autoPlay className="md:h-[900px]">
            <source src="/videos/sports.mp4" type="video/webm" />
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
        <p>Sports Events</p>
      </div>
      <div className="min-h-screen w-screen bg-[url('/bg2.webp')] sm:bg-cover bg-center  bg-no-repeat">
        <div>
          <p className=" font-monst font-[700] lg:text-[26px] md:text-[22px] sm:text-[19px] text-16px my-14 !mb-8 text-center capitalize ">
            Sports Events Hosted By The SP Events
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

export { Sports };
