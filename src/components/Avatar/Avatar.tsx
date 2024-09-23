
interface AvatarProps {
    avatarSize: number;
    textSize: string;
    color: string;
}
export default function Avatar({avatarSize, textSize, color}:AvatarProps):JSX.Element {
    const textSizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"];
    const getSmSize = (textSize: string) => {
        const size = textSizes.indexOf(textSize);
        return textSizes[size-1]
    };
    const avatarSmSize = avatarSize-4;

    if(color === "black") {
        color = "text-gray-800"
    }
    return (
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div>
            <img
              alt=""
              src="/assets/images/avatar.png"
              className={`inline-block h-${avatarSmSize} w-${avatarSmSize} sm:h-${avatarSize} sm:w-${avatarSize} rounded-full shadow-sm`}
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:items-start">
            <p className={`text-${getSmSize(textSize)} sm:text-${textSize} font-medium text-${color}`}>Liri Sobol</p>
            <p className={`text-${getSmSize(textSize)} sm:text-${textSize} font-light text-${color}`}>Fullstack Developer</p>
          </div>
        </div>
    )
  }
  