import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = (): JSX.Element => {
    const { scrollYProgress } = useScroll();
    const height = useTransform(scrollYProgress, [0, 1], ['0%', '96%']);
    return (
        <motion.div className="absolute
            left-5
            sm:inset-x-1/4
            top-28 z-40 
            w-1 
            bg-blue-700"
            style={{
                height: height,
            }}
        />
    );
};

export default ScrollIndicator;
