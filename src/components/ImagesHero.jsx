import React from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";

const ImagesHero = () => {
  return (
    <div className=" px-2">
      <div className="flex  max-w-[1200px] mx-auto  md:flex-row flex-col shadow-md gap-1">
        <Link to="/musicEvents">
          <Item
            title="Music EVENTS"
            link="/Event"
            Image="/2.webp"
            postion="top-6"
            color="bg-blue-500"
          />
        </Link>
        <Link to="/sportsEvents">
          <Item
            title="Sports Events"
            link="/Event"
            Image="/4.webp"
            postion="bottom-6"
            color="bg-purple-500"
          />
        </Link>
        <Link to="/corporateEvents">
          <Item
            title="Corporate Events"
            link="/Event"
            Image="/1.webp"
            postion="top-6"
            color="bg-red-500"
          />
        </Link>
      </div>

      <div className="flex  max-w-[1200px] mx-auto py-1 gap-1  md:flex-row flex-col shadow-md">
        <Link to="/specialEvents">
          <Item
            title="Special Events"
            link="/Event"
            Image="/3.webp"
            postion="top-6"
            color="bg-green-500"
          />
        </Link>
        <Link to="/weddingEvents">
          <Item
            title="Wedding Events"
            link="/Event"
            Image="/5.webp"
            postion="bottom-6"
            color="bg-pink-500"
          />
        </Link>
        <Link to="/launchEvents">
          <Item
            title="Launch Events"
            Image="/6.webp"
            postion="top-6"
            color="bg-orange-500"
          />
        </Link>
      </div>
    </div>
  );
};

export { ImagesHero };
