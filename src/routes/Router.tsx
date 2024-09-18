import { Route, Routes } from "react-router-dom"
import { Me } from "../pages/Me"
import { Projects } from "../pages/Projects"

export const Routing = ():JSX.Element => {
    return (
        <Routes>
            <Route 
                path="/me"
                element={<Me />}
            />
            <Route 
                path="/projects"
                element={<Projects />}
            />
        </Routes>
    )
}