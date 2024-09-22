export default function Avatar() {
    // Add Link
    return (
      <a href="#" className="group block flex-shrink-0">
        <div className="flex">
          <div>
            <img
              alt=""
              src="/assets/images/avatar.png"
              className="inline-block h-10 w-10 sm:h-14 sm:w-14 rounded-full shadow-sm"
            />
          </div>
          <div className="ml-2 sm:ml-5 flex flex-col items-start justify-center">
            <p className="text-sm sm:text-lg font-medium text-white group-hover:text-gray-200">Liri Sobol</p>
            <p className="text-xs sm:text-sm font-light text-white group-hover:text-gray-200">Fullstack Developer</p>
          </div>
        </div>
      </a>
    )
  }
  