import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.5},
    visible: { opacity: 1, scale: 1}
}
interface FadeInProps {
    children: ReactNode
}
export const FadeIn = ({children}:FadeInProps):JSX.Element => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInVariants}
            transition={{ duration: 0.8 }}
            >
            {children}
        </motion.div>
    )
}