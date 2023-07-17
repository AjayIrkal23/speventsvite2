import React, { useEffect } from "react";
import Carousel from "better-react-carousel";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Who = () => {
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
    <div className="">
      <div className="relative">
        <div className=" md:w-screen ">
          <Video autoPlay className="md:h-[900px]">
            <source src="/videos/whoare.mp4" type="video/webm" />
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
      <div className=" text-center  py-4 bg-[#ffa500] text-[28px]  font-[600]">
        <p>Who Are We</p>
      </div>
      <div className="">
        <div className="my-12 !mb-8 font-monst font-[400]  bg-[#ffa500] inline-block sm:w-[400px] w-[300px] py-2 text-black text-right pr-4 text-[18px] ">
          <p>A method to the madness that is CREATING MAGIC</p>
        </div>
        <div className="sm:px-[10%] px-4 text-xs leading-5 text-[14.7px] text-gray-800  text-center">
          <p>
            THE SP EVENTS is leading event management company. THE SP EVENTS as
            we’ve come to be popularly known today, has been built by the young
            & dynamic youths Mr.Samarth U Patangi & Mr.Mukhesh S Havaldar with
            enterprise, excellence and innovation as its core pillars. Our
            humble journey began in 2020. By crafting unforgettable live
            entertainment, sport, corporate experiences and weddings, we’ve
            consistently broken new ground and earned recognition as one of the
            most dependable event organizers across North Karnataka.
          </p>
        </div>
      </div>

      <div className=" mb-8">
        <div className="my-12 !mb-8 font-monst font-[700] uppercase  bg-[#ffa500] inline-block sm:w-[400px] w-[300px] py-2 text-black text-right pr-4 text-[18px] ">
          <p> Grassroots</p>
        </div>
        <div className="flex sm:px-[10%] flex-col md:flex-row px-2 gap-3 ">
          <div className="basis-1/4 px-6 ">
            <img src="/founders/1.png" alt="" className=" h-[400px] w-full" />
          </div>
          <div className="   sm:text-start pt-2 basis-3/4 flex flex-col gap-6 text-[13px] text-gray-700 leading-6 text-center ">
            <p>
              Mr. Samarth U. Patangi, the Founder and CEO of THE SP EVENTS,
              describes himself as a complete Hublian at heart, an engineer by
              education, and a businessman driven by passion! The most by his
              rather unorthodox and progressive career choice.
            </p>
            <p>
              The seeds of this company were planted by his love of music and
              his desire to offer people national experiences. For his company,
              he sought to create a platform that would showcase the diverse and
              rich musical heritage of the nation. However, he wanted to provide
              an exclusive and immersive experience for music enthusiasts. His
              love of music drove every aspect of the company. This included
              curating exceptional playlists, organizing live music events,
              collaborating with local artists, and supporting emerging talents.
              Through his unwavering love for music and his company's commitment
              to offering people a taste of the national experience, he
              succeeded in creating a thriving and inclusive community of music
              lovers who could come together to celebrate, discover, and immerse
              themselves in music's beauty.
            </p>
            <p>
              As a pioneer, SP Events also cemented itself as one of the leading
              event management and planning companies.
            </p>

            <p>
              {" "}
              Taking SP Events to the next level, Mr. Samarth's next strategic
              move was to expand into 'DJ and Live Music Shows', managing
              large-scale LIVE concerts like Sunburn and others. As a result of
              his foresight and vision, the company is now also offering
              services related to Corporate Events and other special events.
              Throughout his leadership, he has stressed values such as
              reliability, consistent quality delivery, equality, respect, and
              teamwork, which has earned him the company's respect. With clients
              like KLE Society, the Government Of Karnataka, Deshpande Startups,
              the University Of Agricultural Sciences Dharwad, Udaya TV,
              Samsung, Hero, Red FM93.5, Volvo, TIECON Hubli, Asian Paints,
              Vijayavani & Dighvijay, Toyota, JK Tyres, Jockey, HDFC Bank, Tata
              Power Solar, and Fasa, SP Events has built a strong market
              reputation as well as close strategic relationships with them.
            </p>
            <p>During the weekend, he enjoys quiet MUSIC PARTIES!</p>
          </div>
        </div>
      </div>
      <hr className="mb-8" />

      <div className=" mb-8">
        <div className="flex sm:px-[10%] flex-col md:flex-row px-2 gap-5 ">
          <div className="basis-1/4 px-6 ">
            <img src="/founders/2.png" alt="" className=" h-[380px] w-full" />
          </div>
          <div className="  sm:text-start pt-2 basis-3/4 flex flex-col gap-8 text-[13px] text-gray-700 leading-6 text-center ">
            <p>
              Mr. Mukhesh S Havaldar the C0-Founder and Managing Director of THE
              SP EVENTS, The master Mukhesh S Havaldar has been in the industry
              for over 7 years overseeing operations of the live events business
              and corporate division. He is a networking skills, event planning
              and execution expertise. He sits in as a chief resource consultant
              for several events. He leads the production team responsible for
              THE SP EVENTS.
            </p>
            <p>
              Mukhesh holds a key position in the company overlooking Corporate,
              Music and special events. His portfolio boasts of clientele like
              Assistant Director in Kannada Film Industry for over 2 Years. He
              also takes care of National projects that are executed by THE SP
              EVENTS. Mukhesh heads our production teams and engineers all large
              scale corporate, sports and music live events. He brings 100%
              perfection to add the ‘wow’ factor to all events.
            </p>
            <p>
              With 7 years of experience to boast of, he has been a key player
              and part of our company. He shows expertise & experience in
              production and marketing.
            </p>
            <p>He is the principal contact for THE SP EVENTS clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Who };
