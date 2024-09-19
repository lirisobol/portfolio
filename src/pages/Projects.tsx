import ScrollIndicator from "../components/Animations/ScrollIndicator";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projectsData";

export const Projects = (): JSX.Element => {
    return (
        <div className="relative text-purple-200 bg-stone-200 shadow-lg p-2 h-very-large">
            <ScrollIndicator />
            <div className="flex flex-col justify-center items-center gap-5 overflow-hidden">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};