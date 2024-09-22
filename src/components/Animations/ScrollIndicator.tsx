import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = (): JSX.Element => {
    const { scrollYProgress } = useScroll();
    const height = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']);
    return (
        <motion.div className="absolute left-2 md:left-1/4 top-0 z-40 w-1"
            style={{
                height: height,
                background: "linear-gradient(90deg, #5c54ff, #000dff)",
            }}
        />
    );
};

export default ScrollIndicator;
