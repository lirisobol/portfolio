import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1}
}
export const FadeIn = ({children}):JSX.Element => {
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