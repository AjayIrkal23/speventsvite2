import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Drawer from "@mui/material/Drawer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NavItem } from "./NavItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <div className="flex justify-between top-0  z-[999] md:fixed sticky w-full md:bg-white bg-white  shadow-md !font-monst  items-center px-4 md:px-12  ">
      <Hamburger toggled={isActive} size={25} toggle={setIsActive} />
      <div className="">
        <img src="/logo.webp" height={150} width={150} alt="" />
      </div>
      <Drawer anchor="left" open={isActive} onClose={() => setIsActive(false)}>
        <div className=" h-full w-[280px] bg-[black]/95">
          <div className="flex justify-end ">
            <Hamburger
              toggled={isActive}
              color="white"
              size={25}
              toggle={setIsActive}
            />
          </div>
          <div className="flex justify-center  ">
            <div className="">
              <img
                src="/logo.webp"
                className=" rounded-lg shadow-lg shadow-yellow-500/30 border bg-white border-white"
                height={220}
                width={220}
                alt=""
              />
            </div>
          </div>
          <div className="flex-col items-center justify-center my-12 space-y-1">
            <Link to="/" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Home" />
            </Link>
            <Link to="/WhoAreWe" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Who are We" />
            </Link>
            <Link to="/musicEvents" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Music Events" />
            </Link>
            <Link to="/sportsEvents" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Sports Events" />
            </Link>
            <Link to="/corporateEvents" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Corporate Events" />
            </Link>
            <Link to="/specialEvents" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Special Events" />
            </Link>
            <Link to="/launchEvents" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Launch Events" />
            </Link>
            <Link to="/weddingEvents" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Wedding Events" />
            </Link>
            <Link to="/clients" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Clients" />
            </Link>
            <Link to="/contact" onClick={() => setIsActive(!isActive)}>
              <NavItem title="Contact Us" />
            </Link>
          </div>
          <div>
            <p className="text-white text-xs italic uppercase px-6 text-center ">
              © ALL RIGHTS RESERVED TO The SP Events{" "}
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export { Navbar };
