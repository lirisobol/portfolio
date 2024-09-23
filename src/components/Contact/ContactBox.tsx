import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ContactBox = (): JSX.Element => {
    return (
        <div className="
            bg-white hover:bg-transparent
            border border-white
            hover:scale-105
            text-indigo-700 hover:text-white
            shadow-lg rounded-lg 
            h-14 mt-5 
            flex justify-evenly items-center
            transition-all
            ">
            <a href="https://github.com/lirisobol" target="blank">
                <FontAwesomeIcon  icon={faGithub} size="2x" className="hover:scale-105 hover:-translate-y-1 transition-all"/>
            </a>
            <a href="https://www.linkedin.com/in/liri-sobol/" target="blank" className="hover:scale-105 hover:-translate-y-1 transition-all">
                <FontAwesomeIcon  icon={faLinkedin} size="2x"/>
            </a>
            <a href="public/assets/files/lirisobol.pdf" download="lirisobol.pdf" className="hover:scale-105 hover:-translate-y-1 transition-all">
                <FontAwesomeIcon  icon={faFile} size="2x"/>
            </a>
        </div>
    )
}