import {motion} from 'motion/react'
import Contactme from '../Components/Contact';

const Contact = () => {
    return (
        <div className=" bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] h-screen w-full flex flex-col items-center relative overflow-auto z-[0]" style={{
                animation: "gradient-bg 7s ease infinite",
                backgroundSize: "200% 200%",
            }}>
            
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1 , y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-[#CAC4CE] text-center font-semibold mb-10"
                >
                    <Contactme />
                </motion.div>
                
           
                

        </div>
    )
}

export default Contact;       

        