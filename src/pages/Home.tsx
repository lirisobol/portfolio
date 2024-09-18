import { Routing } from "../routes/Router"
export const Home = ():JSX.Element => {

    return (
        <div className="bg-gray-900 h-full w-full">
            <div className="relative isolate overflow-hidden pt-14 h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                    <div
                        style={{
                          clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="flex flex-row justify-center py-10 px-8 h-full w-full gap-20">
                    <div className="h-full flex flex-col justify-center items-center px-20 gap-10 w-full">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-white text-6xl">Liri Sobol</h3>
                            <p className="font-light text-white text-2xl px-1">
                                Full Stack Developer
                            </p>
                        </div>
                        <div className="flex flex-row gap-10">
                            <button
                                type="button"
                                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Projects
                            </button>
                            <button
                                type="button"
                                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Me
                            </button>
                            <button
                                type="button"
                                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Stack
                            </button>
                        </div>
                    </div>
                    <div className="border text-white w-full h-full rounded-lg p-4">
                        <Routing />
                    </div>
                </div>


            </div>
        </div>
    )
}
/* 


*/