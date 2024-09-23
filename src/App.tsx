import AnimatedBackground from "./components/Animations/AnimatedBackground";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home"
import { Me } from "./pages/Me"
import { Projects } from "./pages/Projects"

function App() {
    return (
        <div className="h-svh w-svw relative">
            <AnimatedBackground />
            <Header />
            <Home />
            <Projects />
            <Me />
        </div>
    );
}

export default App
