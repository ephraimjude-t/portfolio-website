import { useEffect, useState } from "react";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-row justify-between fixed top-0 left-0 w-full pt-2 p-5 items-center z-[2] transition-all duration-1000 ease-in-out 
      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"}`}
    >
      <ul
        className={`text-[#CAC4CE] text-center font-Regular font-sans flex p-4 w-full justify-between 
        text-sm sm:space-x-4 sm:justify-between md:text-[25px] md:space-x-12 md:justify-center lg:text-lg`}
      >
        <button
          onClick={() => scrollToSection("home")}
          className="text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2] w-[12vw] md:w-[10vw] lg:w-[8vw]"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("skills")}
          className="text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2] w-[12vw] md:w-[10vw] lg:w-[8vw]"
        >
          Skills
        </button>

        <button
          onClick={() => scrollToSection("projects")}
          className="text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2] w-[15vw] md:w-[12vw] lg:w-[10vw]"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2] w-[19vw] md:w-[15vw] lg:w-[12vw] xl:w-[10vw]"
        >
          About Me
        </button>
      </ul>
    </div>
  );
};

export default Navbar;