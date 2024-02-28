import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import NextSections from "./NextSections";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  useEffect(() => {
    AOS.init();
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }
    scrollToSection("sectionId");
  }, []);

  return (
    <section data-aos="flip-up" className="overflow-x-hidden w-[100%]">
      <section id="sectionId">
        <Navbar />
        <Home />
      </section>
      <section id="sec2">
        <NextSections />
      </section>
    </section>
  );
};

export default Layout;
