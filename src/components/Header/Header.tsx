import Avatar from "../Avatar/Avatar"

export const Header = ():JSX.Element => {
    return (
        <div className="
            w-full flex items-center justify-between
            py-3 px-2 sm:px-4
            ">
            <Avatar />
            <div>
                <button 
                    type="button"
                    className="
                        border border-white rounded-lg
                        px-3 py-1.5
                        text-xs text-white sm:text-sm
                        hover:bg-white hover:text-blue-900 transition-all">
                    resume
                </button>
            </div>
        </div>
    )
}