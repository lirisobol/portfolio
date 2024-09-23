
export const techToColor = (tech: string) => {
    switch (tech) {
        case "Typescript":
            return "indigo";

        case "Vite":
            return "purple";

        case "React.js":
            return "blue";

        case "Tailwind.css":
            return "sky";

        case "Framer Motion":
            return "pink";

        case "AG-Grid":
            return "red";
        
        case "Node.js":
            return "green";

        case "Express.js":
            return "yellow";
            
        case "Redux":
            return "teal";

        default:
            return "white"
    }
}