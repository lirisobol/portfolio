export default function Avatar() {
    // Add Link
    return (
      <a href="#" className="group block flex-shrink-0">
        <div className="flex">
          <div>
            <img
              alt=""
              src="/assets/images/avatar.png"
              className="inline-block h-14 w-14 rounded-full"
            />
          </div>
          <div className="ml-5">
            <p className="text-xl font-medium text-gray-100 group-hover:text-gray-200">Liri Sobol</p>
            <p className="text-md font-medium text-gray-100 group-hover:text-gray-200">Fullstack Developer</p>
          </div>
        </div>
      </a>
    )
  }
  