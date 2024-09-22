import ScrollIndicator from "../components/Animations/ScrollIndicator";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projectsData";

export const Projects = (): JSX.Element => {
    return (
        <div className="relative bg-stone-200 shadow-lg p-10 h-very-large rounded-full">
            <ScrollIndicator />
            <div className="flex flex-col items-center justify-center w-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};