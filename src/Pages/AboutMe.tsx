import {motion} from 'motion/react';
const About = () => {
  return (
    <div className="bg-[#242038] bg-gradient-to-r from-[#242038] to-[#665A9E] h-screen w-full flex flex-col items-center relative overflow-auto z-[0]" style={{ 
        animation: "gradient-bg 7s ease infinite",
        backgroundSize: "200% 200%",
      }}>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#CAC4CE] text-4xl text-center font-bold font-montserrat z-[1] transition-opacity duration-500 ease-in-out
            relative top-[5vh]
            ">
                About Me
        </motion.div>
        <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#CAC4CE] text-lg text-center font-semibold font-montserrat z-[1] transition-opacity duration-500 ease-in-out
            relative top-[10vh] p-5 flex flex-col items-center w-[70vw] leading-relaxed text-justify
            ">
                Hi, I'm Ephraim, a passionate Freelance Developer with a focus on Python, APIs, Frontend Development, and Automation. I’m driven by curiosity and constantly strive to push the boundaries of what I can create. My journey as a developer started with a keen interest in solving real-world problems and has grown into a mission to build efficient, scalable, and user-friendly applications.
        </motion.p>
        <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#CAC4CE] text-lg text-center font-semibold font-montserrat z-[1] transition-opacity duration-500 ease-in-out
            relative top-[7vh] p-5 flex flex-col items-center w-[70vw] leading-relaxed text-justify
            ">
                With a solid foundation in backend development (using Python and frameworks like FastAPI), coupled with a growing expertise in React, TypeScript, and TailwindCSS for frontend development, I aim to deliver impactful solutions that are both intuitive and high-performing.
        </motion.p>

        <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#CAC4CE] text-lg text-center font-semibold font-montserrat z-[1] transition-opacity duration-500 ease-in-out
            relative top-[7vh] p-5 flex flex-col items-center w-[70vw] leading-relaxed text-justify
            ">
                When I’m not coding, you can find me working on personal projects, exploring new technologies, or enjoying hobbies that help me unwind. I'm always open to new opportunities and excited to connect with people who share a similar passion for technology and innovation.
        </motion.p>
    </div>
   
  );
}
export default About;