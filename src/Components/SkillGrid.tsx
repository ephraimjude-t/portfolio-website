import { motion } from "motion/react";

interface SkillProps {
  skill: string;
  logo: string;
}

const SkillGrid = ({ skill, logo }: SkillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center bg-[#242038] text-[#CAC4CE] text-center font-Semibold font-montserrat"
    >
      <img src={logo} alt={skill} className="w-16 h-16 p-4" />
      <p className="text-sm mt-2">{skill}</p>
    </motion.div>
  );
};

export default SkillGrid;
