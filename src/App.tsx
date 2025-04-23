import { motion } from "framer-motion";
import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import { useRef } from "react";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string): void => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <motion.div className="flex flex-col">
        <motion.div ref={homeRef} className="h-screen bg-blue-500">
          <Home />
        </motion.div>

        <motion.div ref={skillsRef} className="h-screen bg-green-500">
          <Skills />
        </motion.div>

        <motion.div ref={projectsRef} className="h-screen bg-purple-500">
          <Projects />
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;