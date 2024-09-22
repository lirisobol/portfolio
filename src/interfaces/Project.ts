
export interface Project {
    name: string,
    description: string;
    tech: [],
    links?: {
        github: {
            url: string;
            imageUrl: string;
        },
        live: {
            url: string;
            imageUrl: string
        }
    }
}