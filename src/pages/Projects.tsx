import { ProjectCard } from "../components/Projects/ProjectCard";
import { projects } from "../data/projectsData";

export const Projects = (): JSX.Element => {
    return (
      <div className="bg-white shadow-lg p-2 rounded-lg">
            <h1 className="text-center text-3xl font-bold mb-6">Projects</h1>
            <div className="flex flex-col gap-10">
              {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};