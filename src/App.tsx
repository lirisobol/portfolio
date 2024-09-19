import AnimatedBackground from "./components/Animations/AnimatedBackground";
import Navbar from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"
import { Me } from "./pages/Me"
import { Projects } from "./pages/Projects"

function App() {
    return (
        <div className="h-svh w-100 relative">
            <AnimatedBackground />
            <Navbar />
            <Home />
            <Projects />
            <Me />
        </div>
    );
}

export default App
