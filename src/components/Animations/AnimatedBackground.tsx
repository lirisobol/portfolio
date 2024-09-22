import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = ():JSX.Element => {
    const { scrollYProgress } = useScroll();  // Tracks scroll progress (0 at top, 1 at bottom)
    
    const backgroundColor = useTransform(
        scrollYProgress, 
        [0, 0.5, 1], 
        ["linear-gradient(135deg, #5c54ff, #000dff)", "linear-gradient(135deg, #5c54ff, #3900ff )", "linear-gradient(135deg, #40c9ff, #00e3fd)"]
    );

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full"
            style={{
                background: backgroundColor,
                zIndex: -1  
            }}
        />
    );
};

export default AnimatedBackground;
