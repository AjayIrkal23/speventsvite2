import React from "react";

const LatestEventsCard = ({ title, date, city, Img }) => {
  return (
    <div className="basis-1/4  flex flex-col  hover:scale-105 transition-all ease-in-out duration-200 border border-black/20 shadow-md cursor-pointer mb-10 ">
      {" "}
      <div>
        <img src={Img} alt="" className="w-full h-full" />
      </div>
      <div className="w-full py-4 bg-black/50 mt-auto">
        <p className="text-[white] font-monst font-[600] text-[16px] text-center">
          {title}
        </p>
        <p className="text-[white] font-monst font-[400] text-[14px] text-center">
          {date}
        </p>
        <p className="text-[white] font-monst font-[600] text-[14px] text-center">
          {city}
        </p>
      </div>
    </div>
  );
};

export { LatestEventsCard };
