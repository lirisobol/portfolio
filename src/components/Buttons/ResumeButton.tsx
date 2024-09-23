import { faFile } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ResumeButton = ():JSX.Element => {
    const resumeUrl = "/assets/files/lirisobol.pdf"
    return (
        <a href={resumeUrl} download="lirisobol.pdf">
            <button 
                type="button"
                className="
                    flex gap-4 items-center
                    border border-white rounded-lg
                    px-2 py-2.5  sm:px-4 sm:py-2.5
                    text-xs text-white sm:text-lg
                    hover:bg-white hover:text-blue-900 transition-all">
                Resume
                <FontAwesomeIcon icon={faFile}/>
            </button>
        </a>
    )
}
