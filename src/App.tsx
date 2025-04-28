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
      <motion.div className="flex flex-col w-full h-full">
        <motion.div ref={homeRef} className="h-screen bg-blue-500">
          <Home scrollToContact={() => scrollToSection("contact")} />  {/* Pass the function here */}
        </motion.div>

        <motion.div ref={skillsRef} className="h-screen bg-green-500">
          <Skills />
        </motion.div>

        <motion.div ref={projectsRef} className="h-screen bg-purple-500">
          <Projects />
        </motion.div>
        <motion.div ref={aboutRef} className="h-screen bg-gray-500">
          <About />
        </motion.div>
        <motion.div ref={contactRef} className="h-screen border-b-2 bg-red-500">
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;
