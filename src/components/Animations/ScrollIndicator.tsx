import { motion, useTransform, useViewportScroll } from "framer-motion";

const ScrollIndicator = (): JSX.Element => {
    const { scrollYProgress } = useViewportScroll();

    // Define gradient color changes based on scroll progress
    const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], [
        "linear-gradient(90deg, #5c54ff, #000dff)", 
        "linear-gradient(135deg, #5c54ff, #000dff)",  
        "linear-gradient(135deg, #5c54ff, #000dff)", 
    ]);

    return (
        <motion.div className="absolute left-5 md:left-1/4 top-0 z-40 w-1"
            style={{
                height: '100%',
                background: bgColor,
                transform: 'translateX(-50%)'
            }}
        />
    );
};

export default ScrollIndicator;
