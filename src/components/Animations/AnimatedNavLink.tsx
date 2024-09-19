import { motion } from 'framer-motion';
import { NavLink as RouterNavLink, useResolvedPath, useMatch } from 'react-router-dom';

interface AnimatedNavLinkProps {
  to: string;
  children: string;
}

const underlineAnimation = {
  hover: { width: '100%' },
  initial: { width: 0 }
};

const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="relative text-white p-3">
      <RouterNavLink to={to} className={({ isActive }) => `block ${isActive ? 'font-semibold' : 'font-light'}`}>
        {children}
      </RouterNavLink>
      <motion.div
        className="absolute top-12 left-0 bg-teal-200"
        style={{height:'1px'}}
        initial={false}
        animate={match ? 'hover' : 'initial'}
        variants={underlineAnimation}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default AnimatedNavLink;
