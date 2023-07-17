import React from "react";
import { ClientsCards } from "./ClientsCards";
import { Link } from "react-router-dom";

const Clients = ({ count }) => {
  return (
    <div className=" font-monst ">
      <div className="text-center  bg-red-500  py-6  text-white">
        <p className="uppercase font-monst font-[600] text-2xl ">
          {count ? "Client Review" : "Client SPEAKS"}
        </p>
      </div>
      <section className="pb-12 bg-gray-50 sm:pb-16 lg:pb-20 pt-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                people have said how good Rareblocks
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Our happy clients say about us
              </h2>
            </div>

            {count && (
              <div className="mt-8 text-center md:mt-16 md:order-3">
                <Link
                  to={"/clients"}
                  className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
                >
                  {" "}
                  Check all reviews{" "}
                </Link>
              </div>
            )}
            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter gg"></div>
              </div>
              {count ? (
                <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                  <ClientsCards
                    review={
                      "Actually we were worried about how we can conduct an event because unexpectedly it was raining previous day and made us to panic. But the team of The SP Events handle it very nicely and made our event a grand success. I wish you all the best for your future events"
                    }
                    name={"Prof. Siddalingappa Kadakol"}
                    company={"KLES BCA Dharawad"}
                  />
                  <ClientsCards
                    review={
                      "One of the best event organisers I have come across in Hubli region. Best event company to rely on in and around Hubli region. Their coordination and response time was good. They made sure the event was well executed in a short notice. Satisfied by the way the team presented themselves. Definitely looking forward for further projects"
                    }
                    name={"Rajesh, Marketing manager"}
                    company={"Martial Volvo Cars"}
                  />
                  <ClientsCards
                    review={
                      "it was a fantastic experience. The team at SP Events was extremely professional and well-equipped. The event was seamless and ran like clockwork. The team made sure that everyone was comfortable and happy. I would highly recommend SP Event Management Company to anyone looking for a professional, reliable, and stress-free event planning experience"
                    }
                    name={"Akshay Anusha"}
                    company={""}
                  />
                </div>
              ) : (
                <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                  <ClientsCards
                    review={
                      "Actually we were worried about how we can conduct an event because unexpectedly it was raining previous day and made us to panic. But the team of The SP Events handle it very nicely and made our event a grand success. I wish you all the best for your future events"
                    }
                    name={"Prof. Siddalingappa Kadakol"}
                    company={"KLES BCA Dharawad"}
                  />
                  <ClientsCards
                    review={
                      "One of the best event organisers I have come across in Hubli region. Best event company to rely on in and around Hubli region. Their coordination and response time was good. They made sure the event was well executed in a short notice. Satisfied by the way the team presented themselves. Definitely looking forward for further projects"
                    }
                    name={"Rajesh, Marketing manager"}
                    company={"Martial Volvo Cars"}
                  />
                  <ClientsCards
                    review={
                      "it was a fantastic experience. The team at SP Events was extremely professional and well-equipped. The event was seamless and ran like clockwork. The team made sure that everyone was comfortable and happy. I would highly recommend SP Event Management Company to anyone looking for a professional, reliable, and stress-free event planning experience"
                    }
                    name={"Akshay Anusha"}
                    company={""}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Clients };
