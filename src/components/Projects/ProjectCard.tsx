import { Project } from "../interfaces/Project";
import { LinkAvatar } from "./LinkAvatar";
import { ShowOnScroll } from '../Animations/ShowOnScoll';

interface ProjectCardProps {
    project: Project;
}
export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
    return (
        <ShowOnScroll>
            <div className="border border-2 border-gray-400 rounded-lg w-60 sm:w-96 p-10 my-80">
                <div className="flex flex-col gap-5 mb-2">
                    <h3 className="text-gray-800 text-sm sm:text-xl font-semibold">{project.name}</h3>
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
                <p className="text-gray-500 text-sm sm:text-lg font-light">{project.description}</p>
                </div>
            </div>

        </ShowOnScroll>
    );
};
export default ProjectCard;
