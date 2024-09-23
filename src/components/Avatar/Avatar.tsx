
interface AvatarProps {
    color: string;
}
export default function Avatar({color}:AvatarProps):JSX.Element {
    if(color === "black") {
        color = "text-gray-800"
    }
    return (
        <div className="flex gap-4">
          <div>
            <img
              alt=""
              src="/assets/images/avatar.png"
              className={`inline-block h-10 w-10 sm:h-14 sm:w-14 rounded-full shadow-sm`}
            />
          </div>
          <div className="flex flex-col">
            <p className={`text-sm sm:text-lg font-medium text-${color}`}>Liri Sobol</p>
            <p className={`text-xs sm:text-sm font-light text-${color}`}>Fullstack Developer</p>
          </div>
        </div>
    )
  }
  