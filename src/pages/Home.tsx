import { ContactBox } from "../components/Contact/ContactBox"

export const Home = ():JSX.Element => {

    return (
        <div className="h-full w-dvw font-sans">
            {/* Hero */}
            <div className="h-full flex flex-col items-center px-10 py-10 sm:py-20 md:py-30">
                <div className="flex flex-col">
                    <h3 className="font-bold text-white text-8xl  ">Liri Sobol</h3>
                    <p className="font-light text-white text-6xl ">
                        Full Stack Developer
                        <span className="text-4xl font-bold text-teal-200 animate-pulse"> .</span>
                    </p>
                    <ContactBox variant="dark"/>
                </div>
            </div>
        </div>
    )
}
