import { Project } from "../interfaces/Project";
import { LinkAvatar } from "./LinkAvatar";
import { TechAvatar } from "./TechAvatar";
import { ShowOnScroll } from '../Animations/ShowOnScoll';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {

    return (
        <ShowOnScroll>
            <div className="flex flex-col w-60 sm:w-96 border border-2 border-blue-700 shadow-sm text-blue-900 rounded-lg p-4 my-80 rounded-lg">
                <div className="flex flex-row gap-5 mb-2 ">
                    <h3 className="text-sm sm:text-xl font-semibold">{project.name}</h3>
                    <span className="inline-flex flex-row gap-3">
                        {project.links?.github && (
                            <LinkAvatar
                                key="github"
                                url={project.links.github.url}
                                imageUrl={project.links.github.imageUrl}
                            />
                        )}
                        {project.links?.live && (
                            <LinkAvatar
                                key="live"
                                url={project.links.live.url}
                                imageUrl={project.links.live.imageUrl}
                            />
                        )}
                    </span>
                </div>

                    <p className="text-sm sm:text-lg font-light ">{project.description}</p>

                    <div className="flex flex-col gap-5 sm:gap-10 mt-5 sm:mt-10 p-2">
                    {project.tech.front && (
                        <div className="flex flex-row justify-center gap-1 rounded-lg p-2">
                            {project.tech.front?.map(tech => (
                                <TechAvatar key={tech.name} imageSrc={tech.imageUrl} alt={tech.name} />
                            ))}
                        </div>
                    )}

                        {project.tech.back && (
                        <div className="flex flex-row justify-center gap-1 rounded-lg p-2">
                            {project.tech.back?.map(tech => (
                                <TechAvatar key={tech.name} imageSrc={tech.imageUrl} alt={tech.name} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ShowOnScroll>
    );
};
export default ProjectCard;
