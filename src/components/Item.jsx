import React from "react";

const Item = ({ title, desc, link, color, postion, Image }) => {
  return (
    <div className="containers !col-span-full sm:!col-span-6 xl:!col-span-3 border border-black/80 w-full h-full">
      <img src={Image} alt="Avatar" className="image" />

      <div className={`overlay ${color}`}>
        <div className="text">
          <p className="font-monst font-[600]  underline  mb-4">{title}</p>
          <p className="font-monst text-xs font-[300] mb-4">{desc}</p>
          <a
            href={link}
            className="border-2 border-white py-2 px-4 text-xs mb-4"
          >
            Know More{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export { Item };
