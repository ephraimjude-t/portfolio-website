import SkillGrid from "../Components/SkillGrid";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <motion.div
      className="bg-[#242038] bg-gradient-to-r from-[#242038] to-[#665A9E] h-screen w-full flex flex-col items-center relative overflow-hidden z-0"
      style={{
        animation: "gradient-bg 7s ease infinite",
        backgroundSize: "200% 200%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#CAC4CE] text-2xl text-center font-bold font-montserrat z-1 relative top-[5vh]"
      >
        Skills
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#CAC4CE] text-center font-semibold font-montserrat z-[2] relative top-[10vh]"
      >
        FrontEnd
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#242038] relative flex justify-center items-center rounded-xl z-[-1] h-[40vh] w-[80vw] top-[-4vh] "
        >
          <SkillGrid skill={"HTML"} logo="/logos/html.png" />
          <SkillGrid skill={"CSS"} logo="/logos/css.png" />
          <SkillGrid skill={"Javascript"} logo="/logos/js.png" />
          <SkillGrid skill={"React"} logo="/logos/react.png" />
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#CAC4CE] text-center font-semibold font-montserrat relative z-[2] top-[10vh]"
      >
        BackEnd
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#242038] relative flex justify-center items-center rounded-xl z-[-1] h-[40vh] w-[80vw] top-[-5vh]"
        >
          <SkillGrid skill={"Python"} logo="/logos/python.png" />
          <SkillGrid skill={"FastAPI"} logo="/logos/FastAPI.png" />
          <SkillGrid skill={"Sqlite"} logo="/logos/sqlite.svg" />
          
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Skills;