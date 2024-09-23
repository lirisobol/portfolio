import { ContactBox } from "../components/Contact/ContactBox"

export const Home = ():JSX.Element => {

    return (
        <div className="h-full w-full font-sans">
            {/* Hero */}
            <div className="h-full flex flex-col justify-start items-center px-10 py-52">
                <div className="flex flex-col">
                    <h3 className="font-bold  text-white text-6xl sm:text-8xl">Liri Sobol</h3>
                    <p className="font-light text-white text-2xl sm:text-4xl px-1 sm:tracking-widest truncate">
                        Full Stack Developer
                        <span className="text-4xl font-bold text-teal-200 animate-pulse"> .</span>
                    </p>
                    <ContactBox />
                </div>
            </div>
        </div>
    )
}
