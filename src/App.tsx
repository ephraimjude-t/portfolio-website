// src/App.tsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About from "./Pages/AboutMe";
import Contact from "./Pages/Contact";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string): void => {
    let element: HTMLDivElement | null = null;
    switch (section) {
      case "home":
        element = homeRef.current;
        break;
      case "skills":
        element = skillsRef.current;
        break;
      case "projects":
        element = projectsRef.current;
        break;
      case "about":
        element = aboutRef.current;
        break;
      case "contact":
        element = contactRef.current;
        break;
      default:
        break;
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id "${section}" not found.`);
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      
      <motion.div className="flex flex-col w-full min-h-screen overflow-hidden">
        {/* Each of these sections is still h-screen as intended */}
        <motion.div ref={homeRef} className="h-screen bg-[#242038]">
          <Home scrollToContact={() => scrollToSection("contact")} />
        </motion.div>

        <motion.div ref={skillsRef} className="h-screen bg-[#242038]">
          <Skills />
        </motion.div>

        <motion.div ref={projectsRef} className="h-screen bg-[#242038]">
          <Projects />
        </motion.div>
        <motion.div ref={aboutRef} className="h-screen bg-[#242038]">
          <About />
        </motion.div>

        <motion.div ref={contactRef} className="bg-[#242038]">
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;