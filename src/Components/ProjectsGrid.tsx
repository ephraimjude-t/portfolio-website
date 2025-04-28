import { motion } from "motion/react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
   

const ProjectGrid = ({ title, description, image, link }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-[#242038] text-[#CAC4CE] text-center font-Semibold font-montserrat"
    >
      <img src={image} alt={title} className=" p-4" />
      <h3 className="text-lg mt-2">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:text-blue-700">
        View Project
      </a>
    </motion.div>
  );
}
export default ProjectGrid;