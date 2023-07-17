import { Modal } from "@mui/material";
import React, { useState, useCallback } from "react";
import { ImageCard } from "./ImageCard";
import ImageViewer from "react-simple-image-viewer";

const EventCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const closeModal = () => {
    setOpen(false);
    setIsViewerOpen(false);
  };

  return (
    <div
      className="basis-1/4   mb-8 cursor-pointer hover:scale-110 transition-all duration-200 ease-linear "
      key={item}
    >
      <img
        src={item?.imgs[0]}
        alt=""
        onClick={() => setOpen(true)}
        className="h-[90%] w-full  min-h-[220px]"
      />
      <div className="bg-black/50 py-4">
        <p className="text-[#ffa500] font-monst font-[600]  text-center ">
          {item?.name}
        </p>{" "}
        <p className="text-[#ffa500] font-monst font-[400] text-sm  text-center ">
          {item?.date}
        </p>{" "}
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`md:w-[60vw] w-[94vw] bg-white h-[600px] absolute left-[50%] top-[5%] outline-none -translate-x-[50%]  ${
            isViewerOpen ? "overflow-hidden" : "overflow-scroll"
          }  pb-6`}
        >
          {isViewerOpen && (
            <ImageViewer
              src={item?.imgs}
              currentIndex={currentImage}
              disableScroll={true}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
          <div className="my-5 !mb-2 font-monst   bg-red-500 font-[700] inline-block sm:w-[350px] w-[300px] py-2 text-white text-right pr-4 text-[18px] ">
            <p>IMAGES</p>
          </div>

          <div className="relative grid max-w-lg grid-cols-1 px-4 gap-2 mx-auto md:max-w-none lg:gap-4 md:grid-cols-4">
            {item?.imgs.map((img, i) => (
              <ImageCard
                img={img}
                i={i}
                key={i}
                openImageViewer={openImageViewer}
                setCurrentImage={setCurrentImage}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { EventCard };
