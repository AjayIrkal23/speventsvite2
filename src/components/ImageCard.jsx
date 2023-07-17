import React from "react";
import withImageLoader from "react-image-loader-hoc";

const Image = (props) => <img alt="" {...props} />;
const ImageWithLoader = withImageLoader(Image);

const loaderComp = () => {
  return (
    <div className="flex justify-center w-full items-center h-full">
      <img
        src="/logo1.webp"
        className="  animate-pulse animate-bounce h-[50%] w-[50%]"
        alt=""
      />
    </div>
  );
};

const ImageCard = ({ img, isOpen, setIsOpen, openImageViewer, i }) => {
  return (
    <div
      className="flex flex-col overflow-hidden shadow-xl hover:scale-110 transition-all duration-200 ease-linear cursor-pointer h-full w-full"
      onClick={() => openImageViewer(i)}
    >
      <div className="flex items-center h-[190px] w-full">
        <ImageWithLoader
          className="w-full h-full object-cover"
          src={img}
          loaderComp={loaderComp}
          alt=""
        />
      </div>
    </div>
  );
};

export { ImageCard };
