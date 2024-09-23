import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ContactBoxProps {
    variant: string; // light / dark
}
export const ContactBox = ({variant}:ContactBoxProps): JSX.Element => {
    const getStyles = (variant:string) => {
        if(variant === "dark") return "bg-white hover:bg-transparent border border-white hover:scale-105 text-indigo-700 hover:text-white rounded-lg mt-5 h-14 flex justify-evenly items-center transition-all"
        if(variant === "light") return "text-sky-400 rounded-lg h-14 mt-5 flex justify-evenly items-center gap-10 px-10 transition-all"
    }
    return (
        <div className={getStyles(variant)}>
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