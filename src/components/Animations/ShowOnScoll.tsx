import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ShowOnScrollProps {
    children: ReactNode;
}
export const ShowOnScroll = ({children}: ShowOnScrollProps):JSX.Element => {
    return (
        <motion.div
            initial={{opacity: 0, scale:0.2}}
            whileInView={{opacity: 1, scale:1}}
            viewport={{once:true}}
            transition={{duration:1.4}}
        >
            {children}
        </motion.div> 

    )
}