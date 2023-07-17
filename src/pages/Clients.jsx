import React from "react";
import { useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import { Clients } from "../components/Clients";

const ClientPage = () => {
  useEffect(() => {
    const goToTop1 = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop1();
  }, []);
  const options = {
    loop: true,
    center: true,
    items: 5,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
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
            <source src="/videos/clients.mp4" type="video/webm" />
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
        <p>Our Clients</p>
      </div>
      <div className="max-w-[1350px] mx-auto px-5 py-2">
        {" "}
        <OwlCarousel
          id="customer-testimonoals"
          className="owl-carousel owl-theme"
          {...options}
        >
          {[
            "clients/1.webp",
            "clients/2.webp",
            "clients/3.webp",

            "clients/5.webp",
            "clients/6.webp",
            "clients/7.webp",
            "clients/8.webp",
            "clients/9.webp",
            "clients/10.webp",
            "clients/11.webp",
            "clients/12.webp",
            "clients/13.webp",
            "clients/14.webp",
            "clients/15.webp",
            "clients/16.webp",
            "clients/17.webp",
            "clients/18.webp",
            "clients/19.webp",
            "clients/20.webp",
            "clients/21.webp",
            "clients/22.webp",
          ].map((item) => (
            <div
              className="px-12 py-2  border border-black/30   mx-12 rounded-md my-6"
              key={item}
            >
              <img
                src={item}
                alt=""
                className="w-[80px] h-[80px] object-contain"
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <div>
        <Clients />
      </div>
    </div>
  );
};

export { ClientPage };
