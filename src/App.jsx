import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Who } from "./pages/Who";
import { Corporate } from "./pages/Corporate";
import { Political } from "./pages/Political";
import { Special } from "./pages/Special";
import { Wedding } from "./pages/Wedding";
import { ClientPage } from "./pages/Clients";
import { Sports } from "./pages/Sports";

import { Launch } from "./pages/Launch";
import { Careers } from "./pages/Careers";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoAreWe" element={<Who />} />
        <Route path="/launchEvents" element={<Launch />} />
        <Route path="/corporateEvents" element={<Corporate />} />
        <Route path="/musicEvents" element={<Political />} />
        <Route path="/sportsEvents" element={<Sports />} />
        <Route path="/specialEvents" element={<Special />} />
        <Route path="/weddingEvents" element={<Wedding />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/contact" element={<Careers />} />
      </Routes>

      <section className="">
        {" "}
        <Footer />
      </section>
    </div>
  );
}

export { App };
