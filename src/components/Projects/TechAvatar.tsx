import { motion } from 'framer-motion';

interface TechAvatarProps {
    imageSrc: string;
    alt: string;
}

export const TechAvatar = ({ imageSrc, alt }: TechAvatarProps): JSX.Element => {
    return (
        <div className="inline-block h-14 w-14 mt-3 rounded-full bg-transparent">
            <motion.img
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                alt={alt}
                src={imageSrc}
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain object-center"
            />
        </div>
    );
};
