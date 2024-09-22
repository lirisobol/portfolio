import { Project } from "../components/interfaces/Project";
const base_image_url = "/assets/images/"
export const projects: Project[] = [
    {
        name: "Portfolio Website",
        description: "My personal portfolio built with React, TypeScript, TailwindCSS and Framer Motion.",
        tech: {
            front: [
                { name: "React", imageUrl: `${base_image_url}react.svg` },
                { name: "TypeScript", imageUrl: `${base_image_url}typescript.svg` },
                { name: "TailwindCSS", imageUrl: `${base_image_url}tailwind.svg` }
            ],
        },
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
        tech: {
            front: [
                { name: "React", imageUrl: `${base_image_url}react.svg` },
                { name: "Redux", imageUrl: `${base_image_url}redux.svg` },
                { name: "TypeScript", imageUrl: `${base_image_url}typescript.svg` },
                { name: "TailwindCSS", imageUrl: `${base_image_url}tailwind.svg` },
                { name: "AG-Grid", imageUrl: `${base_image_url}aggrid.png` },
            ],
            back: [
                { name: "Node.js", imageUrl: `${base_image_url}nodejs.svg` },
                { name: "Express.js", imageUrl: `${base_image_url}express.svg` },
            ]
        },
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