import { motion } from "motion/react"

const Projects = () => {
    return (
        <motion.div className=" bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] h-screen w-full flex flex-col items-center relative overflow-hidden z-[0]" style={{
            animation: "gradient-bg 7s ease infinite",
            backgroundSize: "200% 200%",
          }}>
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#CAC4CE] text-2xl text-center font-bold font-montserrat z-[1] transition-opacity duration-500 ease-in-out
            relative top-[5vh]
            ">
                Projects
            </motion.div>
        </motion.div>
    )
}

export default Projects;