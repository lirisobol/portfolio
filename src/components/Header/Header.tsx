import Avatar from "../Avatar/Avatar"
import { ResumeButton } from "../Buttons/ResumeButton"

export const Header = ():JSX.Element => {
    return (
        <div className="
            w-full flex items-center justify-between
            py-3 px-2 sm:px-4
            ">
            <Avatar avatarSize={24} textSize="lg" color="white"/>
            <div>
                <ResumeButton />
            </div>
        </div>
    )
}