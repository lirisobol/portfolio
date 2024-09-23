import Avatar from "../components/Avatar/Avatar"
import { ContactBox } from "../components/Contact/ContactBox"

export const Me = ():JSX.Element => {
    return (
        <div className="text-gray-800 h-svh">
            <div className="
                mt-24
                flex flex-col items-center
                w-svw h-full
                px-14 py-14
                bg-white rounded-t-full shadow-lg">
                <div className="flex flex-col justify-center items-center">
                    <Avatar color="black"/>
                    <ContactBox variant="light"/>
                </div>
                <div className="font-light text-sm sm:text-lg md:text-xl lg:text-2xl text-center md:px-14 lg:px-42 xl:px-80">
                    <p className="mt-2 sm:mt-8">
                        Frontend-oriented Full Stack Developer with a strong passion for creating appealing user interfaces and delivering seamless user experiences. Proficient in Typescript, JavaScript, and React, with good problem solving abilities.Team player, highly driven, curious, and committed to continuous learning and growth.
                    </p>
                    <p className="mt-2 sm:mt-8">
                        I was born and raised in kibbutz Kfar-Aza, Now reside in Tel-Aviv.
                        Although i did not yet acquire working experience in web development,
                        i dedicate most of my time working on projects, gaining knowledge and experience in web development technologies.
                    </p>
                    <p className="mt-2 sm:mt-8">
                        Aside from programming, i like to spend my free time on my hobbies; watching international soccer, participating in fantasy premier league and
                        playing and learning chess
                    </p>
                </div>
            </div>
        </div>
    )
}