import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Clients } from "../components/Clients";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Home = () => {
  useEffect(() => {
    const goToTop1 = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop1();
  }, []);
  return (
    <div>
      <section>
        {" "}
        <Hero />
      </section>
      <section className="mt-18">
        <Clients count={true} />
      </section>
    </div>
  );
};

export { Home };
