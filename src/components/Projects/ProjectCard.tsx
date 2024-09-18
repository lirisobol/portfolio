import { Project } from "../interfaces/Project"
import { LinkAvatar } from "./LinkAvatar"
import { TechAvatar } from "./TechAvatar"

interface ProjectCardProps {
    project: Project
}
export const ProjectCard = ({project}: ProjectCardProps):JSX.Element => {
    return (
        <div className="flex flex-col text-gray-900 rounded-lg p-4">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-lg font-light">{project.description}</p>

            <div className="flex flex-row gap-10 mt-10 shadow-lg rounded-lg p-2">
                {project.tech.front && (
                    <div className="flex flex-row justify-center gap-5 rounded-lg p-2">
                        <span className="text-sm font-light">Client</span>
                        {project.tech.front?.map(tech => (
                            <TechAvatar key={tech.name} imageSrc={tech.imageUrl} alt={tech.name}/>
                        ))}
                    </div>
                )}

                {project.tech.back && (
                    <div className="flex flex-row justify-center gap-5 rounded-lg p-2">
                        <span className="text-sm font-light">Server</span>
                        {project.tech.back?.map(tech => (
                            <TechAvatar key={tech.name} imageSrc={tech.imageUrl} alt={tech.name}/>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-row gap-10 mt-10 justify-between">
                {project.links?.github && (
                    <LinkAvatar 
                        key={"github"}
                        url={project.links.github.url}
                        imageUrl={project.links.github.imageUrl}
                        />
                )}
                {project.links?.live && (
                    <LinkAvatar 
                        key={"live"}
                        url={project.links.live.url}
                        imageUrl={project.links.live.imageUrl}
                        />
                )}

            </div>
        </div>
    )
}