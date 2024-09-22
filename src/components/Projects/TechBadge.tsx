import { techToColor } from "../../data/techSwitch";

interface TechBadgeProps {
    tech: string;
}
export const TechBadge = ({tech}: TechBadgeProps):JSX.Element => {
    const color = techToColor(tech);    
    console.log(color);
    return (
        <span className={`inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-lg font-medium bg-${color}-100 text-${color}-600`}>
            <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-400`}>
                <circle r={3} cx={3} cy={3} />
            </svg>
            {tech}
        </span>
    )
}