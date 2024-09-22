const base_image_url = "/assets/images/"
export const projects = [
    {
        name: "Portfolio Website",
        description: "My personal portfolio built with React, TypeScript, TailwindCSS and Framer Motion.",
        tech: ["Typescript", "Vite", "React.js", "Tailwind.css", "Framer Motion"],
        links: {
            github: {
                url: "https://github.com/lirisobol/portfolio",
                imageUrl: `${base_image_url}github.svg`
            },
            live: {
                url: "future",
                imageUrl:`${base_image_url}web.svg`
            }
        }
    },
    {
        name: "Fantasea",
        description: "Fantasy premier league web app, utilizing various official API endpoints to streamline and display data and statistics of players, teams, managers and more, as well as offering more advanced features like drafting a squad, tracking your own fantasy squad and cups.",
        tech: ["Typescript", "Vite", "React.js", "Tailwind.css", "AG-Grid", "Node.js", "Express.js"],
        links: {
            github: {
                url: "https://github.com/lirisobol/fantasea",
                imageUrl: `${base_image_url}github.svg`
            },
            live: {
                url: "future",
                imageUrl: `${base_image_url}web.svg`
            }
        }

    }
];