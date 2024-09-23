import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projectsData";

export const Projects = (): JSX.Element => {
    return (
        <div className="relative bg-stone-200 shadow-lg p-2 sm:p-10 h-very-large rounded-full w-svw">
            
            <div className="flex flex-col justify-evenly flex-1 h-full p-5 sm:p-20">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};