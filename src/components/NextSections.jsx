import React, { useEffect } from "react";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const NextSections = () => {
  
    function loader(){
      setTimeout(()=>{

      },1000)
    }
  return (
    <section onLoad={loader}>
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};

export default NextSections;
