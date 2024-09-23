import { LinkAvatar } from "./LinkAvatar";
import { ShowOnScroll } from '../Animations/ShowOnScoll';
import { Project } from "../../interfaces/Project";
import { TechBadge } from "./TechBadge";
interface ProjectCardProps {
    project: Project;
}
export const ProjectCard = ({ project }:ProjectCardProps): JSX.Element => {
    return (
        <ShowOnScroll>
            <div className="w-full p-10">
                <div className="flex flex-col gap-5 mb-2">
                    <h3 className="text-gray-800 text-3xl sm:text-5xl font-semibold">{project.name}</h3>
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
                <p className="text-gray-500 text-xl sm:text-3xl font-light">{project.description}</p>
                <div className="flex flex-wrap gap-5">
                    {project.tech.map(tech => (<TechBadge key={tech} tech={tech} />))}
                </div>
                </div>
            </div>
        </ShowOnScroll>
    );
};
export default ProjectCard;
