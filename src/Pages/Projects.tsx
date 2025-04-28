import { motion } from "motion/react"
import ProjectGrid from "../Components/ProjectsGrid";

const Projects = () => {
    return (
        <div className=" bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] h-screen w-full flex flex-col items-center relative overflow-hidden z-[0]" style={{
            animation: "gradient-bg 7s ease infinite",
            backgroundSize: "200% 200%",
          }}>
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#CAC4CE] text-2xl text-center font-bold font-montserrat z-[1] transition-opacity duration-500 ease-in-out
            relative top-[5vh]
            ">
                Projects
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#242038] relative flex flex-col justify-center items-center rounded-xl z-[-1] h-[80vh] w-[80vw] top-[10vh] overflow-auto  ">
                    <div className="mt-300 p-4 w-150">
                        <ProjectGrid title="Stock Scraper" description="A full-stack stock market scraper built with FastAPI and React. It fetches top gaining and losing stocks using real-time APIs, and displays it beautifully in a dynamic dashboard. Includes powerful backend error handling and frontend search functionality for maximum usability." image="./images/StockScraper.png" link="https://example.com/project1" />
                    </div> 
                    <div className="mt-25 p-4 w-150">
                        <ProjectGrid title="Portfolio" description="A modern and fast developer portfolio built with React and TailwindCSS. Showcases personal projects, skills, and contact details with a clean UI and mobile responsiveness. Focused on speed, minimalism, and strong first impressions for freelance clients and companies." image="./images/Portfolio.png" link="https://example.com/project3" />
                    </div>
                    <div className="mt-25 p-4 w-150">
                        <ProjectGrid title="Chatbot" description="An intelligent chatbot application using FastAPI and React. It integrates with OpenRouter's large language models to generate human-like responses. Features smooth frontend UX, clean backend API communication, and scalable design ready for business use cases." image="./images/Chatbot.png" link="https://example.com/project2"  />
                    </div>                  

                    
            </motion.div>
        </div>
    )
}

export default Projects;