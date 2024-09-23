import Avatar from "../Avatar/Avatar"
import { ResumeButton } from "../Buttons/ResumeButton"

export const Header = ():JSX.Element => {
    return (
        <div className="
            w-full flex items-center justify-between
            py-4 px-2 sm:px-10
            ">
            <Avatar color="white"/>
            <div>
                <ResumeButton />
            </div>
        </div>
    )
}