export const Home = ():JSX.Element => {

    return (
        <div className="h-full w-full font-sans">
            {/* Hero */}
            <div className="h-full flex flex-col justify-center items-center px-10">
                <div className="flex flex-col">
                    <h3 className="font-bold  text-white text-8xl">Liri Sobol</h3>
                    <p className="font-light text-white text-5xl px-1">
                        Full Stack Developer
                        <span className="text-4xl font-bold text-teal-200 animate-pulse"> .</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
